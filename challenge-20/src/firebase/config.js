
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = import.meta.env.VITE_FIREBASE_CONFIG;
console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);
