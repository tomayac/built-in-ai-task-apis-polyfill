import { getBackend } from '../backend.js';
import { DestroyableModel } from '../common/DestroyableModel.js';

export class Writer extends DestroyableModel {
  // --- Private fields to store instance properties ---
  #backend;
  tone;
  format;
  length;
  sharedContext;
  expectedInputLanguages;
  expectedContextLanguages;
  outputLanguage;
  inputQuota;

  /**
   * Creates a new Writer instance.
   * @param {object} options - WriterCreateOptions
   * @returns {Promise<Writer>}
   */
  static async create(options = {}) {
    if (options.signal?.aborted) {
      throw options.signal.reason ?? new DOMException('Aborted', 'AbortError');
    }

    if (options.monitor) {
      try {
        // The backend itself doesn't need the monitor,
        // but the create call does.
        options.monitor(new EventTarget());
      } catch (e) {
        console.warn('Monitor callback failed.', e);
      }
    }

    const backend = getBackend();
    if (typeof backend.checkWriterAvailability !== 'function') {
      throw new Error('The configured AI backend does not support Writer.');
    }

    // We can assume creation is fast as it's just instantiating
    // the wrapper. The real work (model download) is handled
    // by the backend's `availability` or first-use call.
    return new Writer(options, backend);
  }

  /**
   * Checks the availability of the underlying writing model.
   * @param {object} options - WriterCreateCoreOptions
   * @returns {Promise<string>}
   */
  static async availability(options = {}) {
    // Static methods must get the backend from the registry
    return getBackend().checkWriterAvailability(options);
  }

  /**
   * @param {object} options - WriterCreateOptions
   * @param {object} backend - The active backend instance
   */
  constructor(options, backend) {
    super();
    this.#backend = backend;

    // Set properties from options, with defaults from IDL
    this.tone = options.tone ?? 'neutral';
    this.format = options.format ?? 'markdown';
    this.length = options.length ?? 'short';
    this.sharedContext = options.sharedContext ?? '';

    this.expectedInputLanguages = options.expectedInputLanguages
      ? Object.freeze(options.expectedInputLanguages)
      : null;
    this.expectedContextLanguages = options.expectedContextLanguages
      ? Object.freeze(options.expectedContextLanguages)
      : null;
    this.outputLanguage = options.outputLanguage ?? null;

    // Get quota from backend
    this.inputQuota = this.#backend.getWriterQuota
      ? this.#backend.getWriterQuota()
      : Infinity;
  }

  // --- Readonly Attribute Getters ---
  get tone() {
    return this.tone;
  }
  get format() {
    return this.format;
  }
  get length() {
    return this.length;
  }
  get sharedContext() {
    return this.sharedContext;
  }
  get expectedInputLanguages() {
    return this.expectedInputLanguages;
  }
  get expectedContextLanguages() {
    return this.expectedContextLanguages;
  }
  get outputLanguage() {
    return this.outputLanguage;
  }
  get inputQuota() {
    return this.inputQuota;
  }

  /**
   * Gathers all instance and per-call options into a single
   * config object for the backend.
   */
  #getConfig(options) {
    return {
      // Instance options
      tone: this.tone,
      format: this.format,
      length: this.length,
      sharedContext: this.sharedContext,
      outputLanguage: this.outputLanguage,
      // Per-call options
      context: options?.context,
      signal: options?.signal,
    };
  }

  /**
   * Generates text for the given input.
   * @param {string} input - The text to write.
   * @param {object} options - WriterWriteOptions
   * @returns {Promise<string>}
   */
  async write(input, options = {}) {
    const config = this.#getConfig(options);
    return this.#backend.write(input, config);
  }

  /**
   * Generates a text as a ReadableStream.
   * @param {string} input - The text to write.
   * @param {object} options - WriterWriteOptions
   * @returns {ReadableStream<string>}
   */
  writeStreaming(input, options = {}) {
    const config = this.#getConfig(options);
    return this.#backend.writeStreaming(input, config);
  }

  /**
   * Measures the token count for a given writing input.
   * @param {string} input - The text to measure.
   * @param {object} options - WriterWriteOptions
   * @returns {Promise<number>} - The total token count.
   */
  async measureInputUsage(input, options = {}) {
    const config = this.#getConfig(options);
    return this.#backend.measureWriterUsage(input, config);
  }
}
