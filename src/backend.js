let _activeBackend = null;

/**
 * Sets the active AI backend for all polyfills.
 * @param {object} backend - An instance of a backend (e.g., FirebaseBackend).
 */
export function setBackend(backend) {
  _activeBackend = backend;
}

/**
 * Gets the currently active AI backend.
 * @returns {object} The active backend instance.
 */
export function getBackend() {
  if (!_activeBackend) {
    throw new Error(
      'Built-in AI API Polyfill: No backend configured. ' +
        'Call a configuration function, e.g., `configureFirebaseBackend()`, first.'
    );
  }
  return _activeBackend;
}
