import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "loginecart.firebaseapp.com",
  projectId: "loginecart",
  storageBucket: "loginecart.firebasestorage.app",
  messagingSenderId: "490206316736",
  appId: "1:490206316736:web:c26e8bcae5735daa93c525",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
