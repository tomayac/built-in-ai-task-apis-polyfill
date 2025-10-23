import { getBackend } from '../backend.js';
import { DestroyableModel } from '../common/DestroyableModel.js';

export class Rewriter extends DestroyableModel {
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
   * Creates a new Rewriter instance.
   * @param {object} options - RewriterCreateOptions
   * @returns {Promise<Rewriter>}
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
    if (typeof backend.checkRewriterAvailability !== 'function') {
      throw new Error('The configured AI backend does not support Rewriter.');
    }

    // We can assume creation is fast as it's just instantiating
    // the wrapper. The real work (model download) is handled
    // by the backend's `availability` or first-use call.
    return new Rewriter(options, backend);
  }

  /**
   * Checks the availability of the underlying rewriting model.
   * @param {object} options - RewriterCreateCoreOptions
   * @returns {Promise<string>}
   */
  static async availability(options = {}) {
    // Static methods must get the backend from the registry
    return getBackend().checkRewriterAvailability(options);
  }

  /**
   * @param {object} options - RewriterCreateOptions
   * @param {object} backend - The active backend instance
   */
  constructor(options, backend) {
    super();
    this.#backend = backend;

    // Set properties from options, with defaults from IDL
    this.tone = options.tone ?? 'as-is';
    this.format = options.format ?? 'as-is';
    this.length = options.length ?? 'as-is';
    this.sharedContext = options.sharedContext ?? '';

    this.expectedInputLanguages = options.expectedInputLanguages
      ? Object.freeze(options.expectedInputLanguages)
      : null;
    this.expectedContextLanguages = options.expectedContextLanguages
      ? Object.freeze(options.expectedContextLanguages)
      : null;
    this.outputLanguage = options.outputLanguage ?? null;

    // Get quota from backend
    this.inputQuota = this.#backend.getRewriterQuota
      ? this.#backend.getRewriterQuota()
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
   * Rewrites the given input.
   * @param {string} input - The text to rewrite.
   * @param {object} options - RewriterRewriteOptions
   * @returns {Promise<string>}
   */
  async rewrite(input, options = {}) {
    const config = this.#getConfig(options);
    return this.#backend.rewrite(input, config);
  }

  /**
   * Rewrites the text as a ReadableStream.
   * @param {string} input - The text to rewrite.
   * @param {object} options - RewriterRewriteOptions
   * @returns {ReadableStream<string>}
   */
  rewriteStreaming(input, options = {}) {
    const config = this.#getConfig(options);
    return this.#backend.rewriteStreaming(input, config);
  }

  /**
   * Measures the token count for a given rewriting input.
   * @param {string} input - The text to measure.
   * @param {object} options - RewriterRewriteOptions
   * @returns {Promise<number>} - The total token count.
   */
  async measureInputUsage(input, options = {}) {
    const config = this.#getConfig(options);
    return this.#backend.measureRewriterUsage(input, config);
  }
}
