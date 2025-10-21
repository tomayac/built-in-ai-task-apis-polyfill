import { Summarizer } from './public/Summarizer.js';
// import { WriterPolyfill } from './public/Writer.js'; // Future

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

  /*
  // Example for adding Writer
  if (!self.Writer) {
    self.Writer = WriterPolyfill;
    console.log("Polyfill for AI Writer has been installed.");
  }
  */
}

installPolyfills();
