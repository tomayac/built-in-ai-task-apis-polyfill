import { getGenerativeModel, InferenceMode } from 'firebase/ai';

/**
 * An AI backend implementation that uses the Firebase AI SDK.
 */
export class FirebaseBackend {
  #ai;
  #model;

  constructor(ai) {
    this.#ai = ai;
    this.#model = getGenerativeModel(this.#ai, {
      mode: InferenceMode.ONLY_IN_CLOUD,
      model: 'gemini-2.5-flash',
    });
  }

  /**
   * Checks availability of the summarizer model.
   * @param {object} options - SummarizerCreateCoreOptions (ignored by this backend)
   * @returns {Promise<"available">}
   */
  async checkSummarizerAvailability(options) {
    return 'available';
  }

  /**
   * Gets the input quota.
   * @returns {number}
   */
  getSummarizerQuota() {
    // This isn't exposed by the Firebase SDK, so we return Infinity.
    return Infinity;
  }

  /**
   * Helper to build the summarizer prompt from config.
   * @param {string} input
   * @param {object} config
   * @returns {string}
   */
  #buildSummarizerPrompt(input, config) {
    let prompt = `You are a text summarization assistant.
Follow these instructions precisely:
- Task: Summarize the provided text.
- Summary Type: ${config.type}
- Output Format: ${config.format}
- Desired Length: ${config.length}
`;
    if (config.outputLanguage) {
      prompt += `- Output Language: ${config.outputLanguage}\n`;
    }

    const fullContext = [config.sharedContext, config.context]
      .filter(Boolean)
      .join('\n\n');

    if (fullContext) {
      prompt += `\nHere is some context to use:\n${fullContext}\n`;
    }

    prompt += `\nHere is the text to summarize:\n---\n${input}\n---\n\nSummary:`;
    return prompt;
  }

  /**
   * Performs non-streaming summarization.
   * @param {string} input
   * @param {object} config
   * @returns {Promise<string>}
   */
  async summarize(input, config) {
    const prompt = this.#buildSummarizerPrompt(input, config);
    const signal = config.signal;
    try {
      const result = await this.#model.generateContent(prompt, { signal });
      return result.response.text();
    } catch (err) {
      // Propagate AbortError correctly
      if (err.name === 'AbortError' || signal?.aborted) {
        throw signal?.reason ?? new DOMException('Aborted', 'AbortError');
      }
      throw err;
    }
  }

  /**
   * Performs streaming summarization.
   * @param {string} input
   * @param {object} config
   * @returns {ReadableStream<string>}
   */
  summarizeStreaming(input, config) {
    const prompt = this.#buildSummarizerPrompt(input, config);
    const userSignal = config.signal;

    // We need an internal controller to bridge stream cancellation
    // with the Firebase SDK's AbortSignal.
    const internalController = new AbortController();

    // Link the user's signal (if any) to our internal controller
    userSignal?.addEventListener(
      'abort',
      () => internalController.abort(userSignal.reason),
      { once: true }
    );
    const that = this;
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const result = await that.#model.generateContentStream(prompt, {
            signal: internalController.signal,
          });
          for await (const chunk of result.stream) {
            controller.enqueue(chunk.text());
          }
          controller.close();
        } catch (err) {
          // Determine the correct error to throw
          let errorToThrow;
          if (userSignal?.aborted) {
            // User's signal aborted
            errorToThrow =
              userSignal.reason ?? new DOMException('Aborted', 'AbortError');
          } else if (err.name === 'AbortError') {
            // Stream was cancelled (internal signal)
            errorToThrow = internalController.signal.reason ?? err;
          } else {
            // Some other error
            errorToThrow = err;
          }
          controller.error(errorToThrow);
        }
      },
      cancel(reason) {
        // This is called when the stream consumer calls .cancel()
        internalController.abort(reason);
      },
    });

    return stream;
  }

  /**
   * Measures token usage for summarization.
   * @param {string} input
   * @param {object} config
   * @returns {Promise<number>}
   */
  async measureSummarizerUsage(input, config) {
    const prompt = this.#buildSummarizerPrompt(input, config);
    const signal = config.signal;
    try {
      const result = await this.#model.countTokens(prompt, { signal });
      return result.totalTokens;
    } catch (err) {
      if (err.name === 'AbortError' || signal?.aborted) {
        throw signal?.reason ?? new DOMException('Aborted', 'AbortError');
      }
      throw err;
    }
  }

  /**
   * Checks availability of the writer model.
   * @param {object} options - WriterCreateCoreOptions (ignored by this backend)
   * @returns {Promise<"available">}
   */
  async checkWriterAvailability(options) {
    return 'available';
  }

  /**
   * Gets the writer input quota.
   * @returns {number}
   */
  getWriterQuota() {
    // This isn't exposed by the Firebase SDK, so we return Infinity.
    return Infinity;
  }

  /**
   * Helper to build the writer prompt from config.
   * @param {string} input
   * @param {object} config
   * @returns {string}
   */
  #buildWriterPrompt(input, config) {
    let prompt = `You are a writing assistant.
Follow these instructions precisely:
- Task: Write the provided text.
- Tone: ${config.tone}
- Output Format: ${config.format}
- Desired Length: ${config.length}
`;
    if (config.outputLanguage) {
      prompt += `- Output Language: ${config.outputLanguage}\n`;
    }

    const fullContext = [config.sharedContext, config.context]
      .filter(Boolean)
      .join('\n\n');

    if (fullContext) {
      prompt += `\nHere is some context to use:\n${fullContext}\n`;
    }

    prompt += `\nHere is the text to write:\n---\n${input}\n---\n\nWritten Text:`;
    return prompt;
  }

  /**
   * Performs non-streaming writing.
   * @param {string} input
   * @param {object} config
   * @returns {Promise<string>}
   */
  async write(input, config) {
    const prompt = this.#buildWriterPrompt(input, config);
    const signal = config.signal;
    try {
      const result = await this.#model.generateContent(prompt, { signal });
      return result.response.text();
    } catch (err) {
      // Propagate AbortError correctly
      if (err.name === 'AbortError' || signal?.aborted) {
        throw signal?.reason ?? new DOMException('Aborted', 'AbortError');
      }
      throw err;
    }
  }

  /**
   * Performs streaming writing.
   * @param {string} input
   * @param {object} config
   * @returns {ReadableStream<string>}
   */
  writeStreaming(input, config) {
    const prompt = this.#buildWriterPrompt(input, config);
    const userSignal = config.signal;

    // We need an internal controller to bridge stream cancellation
    // with the Firebase SDK's AbortSignal.
    const internalController = new AbortController();

    // Link the user's signal (if any) to our internal controller
    userSignal?.addEventListener(
      'abort',
      () => internalController.abort(userSignal.reason),
      { once: true }
    );
    const that = this;
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const result = await that.#model.generateContentStream(prompt, {
            signal: internalController.signal,
          });
          for await (const chunk of result.stream) {
            controller.enqueue(chunk.text());
          }
          controller.close();
        } catch (err) {
          // Determine the correct error to throw
          let errorToThrow;
          if (userSignal?.aborted) {
            // User's signal aborted
            errorToThrow =
              userSignal.reason ?? new DOMException('Aborted', 'AbortError');
          } else if (err.name === 'AbortError') {
            // Stream was cancelled (internal signal)
            errorToThrow = internalController.signal.reason ?? err;
          } else {
            // Some other error
            errorToThrow = err;
          }
          controller.error(errorToThrow);
        }
      },
      cancel(reason) {
        // This is called when the stream consumer calls .cancel()
        internalController.abort(reason);
      },
    });

    return stream;
  }

  /**
   * Measures token usage for writing.
   * @param {string} input
   * @param {object} config
   * @returns {Promise<number>}
   */
  async measureWriterUsage(input, config) {
    const prompt = this.#buildWriterPrompt(input, config);
    const signal = config.signal;
    try {
      const result = await this.#model.countTokens(prompt, { signal });
      return result.totalTokens;
    } catch (err) {
      if (err.name === 'AbortError' || signal?.aborted) {
        throw signal?.reason ?? new DOMException('Aborted', 'AbortError');
      }
      throw err;
    }
  }
}
