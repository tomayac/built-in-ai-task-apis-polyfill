import { getBackend } from '../backend.js';
import { DestroyableModel } from '../common/DestroyableModel.js';

export class Summarizer extends DestroyableModel {
  // --- Private fields to store instance properties ---
  #backend;
  type;
  format;
  length;
  sharedContext;
  expectedInputLanguages;
  expectedContextLanguages;
  outputLanguage;
  inputQuota;

  /**
   * Creates a new Summarizer instance.
   * @param {object} options - SummarizerCreateOptions
   * @returns {Promise<Summarizer>}
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
    if (typeof backend.checkSummarizerAvailability !== 'function') {
      throw new Error('The configured AI backend does not support Summarizer.');
    }

    // We can assume creation is fast as it's just instantiating
    // the wrapper. The real work (model download) is handled
    // by the backend's `availability` or first-use call.
    return new Summarizer(options, backend);
  }

  /**
   * Checks the availability of the underlying summarization model.
   * @param {object} options - SummarizerCreateCoreOptions
   * @returns {Promise<string>}
   */
  static async availability(options = {}) {
    // Static methods must get the backend from the registry
    return getBackend().checkSummarizerAvailability(options);
  }

  /**
   * @param {object} options - SummarizerCreateOptions
   * @param {object} backend - The active backend instance
   */
  constructor(options, backend) {
    super();
    this.#backend = backend;

    // Set properties from options, with defaults from IDL
    this.type = options.type ?? 'key-points';
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
    this.inputQuota = this.#backend.getSummarizerQuota
      ? this.#backend.getSummarizerQuota()
      : Infinity;
  }

  // --- Readonly Attribute Getters ---
  get type() {
    return this.type;
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
      type: this.type,
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
   * Generates a summary for the given input.
   * @param {string} input - The text to summarize.
   * @param {object} options - SummarizerSummarizeOptions
   * @returns {Promise<string>}
   */
  async summarize(input, options = {}) {
    const config = this.#getConfig(options);
    return this.#backend.summarize(input, config);
  }

  /**
   * Generates a summary as a ReadableStream.
   * @param {string} input - The text to summarize.
   * @param {object} options - SummarizerSummarizeOptions
   * @returns {ReadableStream<string>}
   */
  summarizeStreaming(input, options = {}) {
    const config = this.#getConfig(options);
    return this.#backend.summarizeStreaming(input, config);
  }

  /**
   * Measures the token count for a given summarization input.
   * @param {string} input - The text to measure.
   * @param {object} options - SummarizerSummarizeOptions
   * @returns {Promise<number>} - The total token count.
   */
  async measureInputUsage(input, options = {}) {
    const config = this.#getConfig(options);
    return this.#backend.measureSummarizerUsage(input, config);
  }
}
