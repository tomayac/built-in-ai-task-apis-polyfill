import { Summarizer } from './public/Summarizer.js';
import { Writer } from './public/Writer.js';
import { Rewriter } from './public/Rewriter.js';

if (!ReadableStream.prototype[Symbol.asyncIterator]) {
  ReadableStream.prototype[Symbol.asyncIterator] = async function* () {
    const reader = this.getReader();
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          return;
        }
        yield value;
      }
    } finally {
      reader.releaseLock();
    }
  };
}

/**
 * Installs all AI polyfills onto the global object (`self`).
 */
function installPolyfills() {
  if (!self.Summarizer) {
    self.Summarizer = Summarizer;
    console.log('Polyfill for AI Summarizer has been installed.');
  } else {
    console.log('Native AI Summarizer detected. Polyfill not required.');
  }

  if (!self.Writer) {
    self.Writer = Writer;
    console.log('Polyfill for AI Writer has been installed.');
  } else {
    console.log('Native AI Writer detected. Polyfill not required.');
  }

  if (!self.Rewriter) {
    self.Rewriter = Rewriter;
    console.log('Polyfill for AI Rewriter has been installed.');
  } else {
    console.log('Native AI Rewriter detected. Polyfill not required.');
  }
}

installPolyfills();
