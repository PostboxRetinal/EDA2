import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDetxSah_1BXBWcqXetNUm5STvNNz02MuE',
	authDomain: 'challenge20-40672.firebaseapp.com',
	projectId: 'challenge20-40672',
	storageBucket: 'challenge20-40672.firebasestorage.app',
	messagingSenderId: '403659497770',
	appId: '1:403659497770:web:f9de41fa5bd0f5665a3e53',
	measurementId: 'G-X3NEHMCHVN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };