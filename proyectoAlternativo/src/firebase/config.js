import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyByNJ4SU42MLa3ZTUVoXNr1Z17z8G68gOI',
	authDomain: 'challenge21-f6367.firebaseapp.com',
	projectId: 'challenge21-f6367',
	storageBucket: 'challenge21-f6367.firebasestorage.app',
	messagingSenderId: '984379837832',
	appId: '1:984379837832:web:18fee1aa2328c2b0133e3d',
	measurementId: 'G-BPBFBM2R9E',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore();

export { auth, googleProvider, db };
