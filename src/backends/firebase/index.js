import { setBackend } from '../../backend.js';
import { FirebaseBackend } from './FirebaseBackend.js';

import { initializeApp } from 'firebase/app';
import { getAI, GoogleAIBackend } from 'firebase/ai';

/**
 * Configures the AI polyfill to use the Firebase AI backend.
 * This is the only function a user needs to import. *
 */
export function configureFirebaseBackend() {
  // Import your polyfill's configuration function
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  // Initialize Firebase AI
  const ai = getAI(firebaseApp, { backend: new GoogleAIBackend() });
  const backend = new FirebaseBackend(ai);
  setBackend(backend);
}
