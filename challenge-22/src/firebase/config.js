import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDetxSah_1BXBWcqXetNUm5STvNNz02MuE',
	authDomain: 'challenge20-40672.firebaseapp.com',
	projectId: 'challenge20-40672',
	storageBucket: 'challenge20-40672.firebasestorage.app',
	messagingSenderId: '403659497770',
	appId: '1:403659497770:web:f9de41fa5bd0f5665a3e53',
	measurementId: 'G-X3NEHMCHVN',
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore();

export { auth, googleProvider, db };