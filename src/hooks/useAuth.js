import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut as firebaseSignOut,
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase/config';
import {
	setUser,
	setLoading,
	setError,
	clearError,
	resetAuth,
} from '../store/authSlice';
import { handleFirebaseError } from '../firebase/handleFirebaseError';

export const useAuth = () => {
	const dispatch = useDispatch();

	const registerWithEmail = useCallback( // Registro de usuario con combo email y psswd
		async (email, password) => {
			try {
				dispatch(setLoading(true));
				dispatch(clearError());
				const userCredential = await createUserWithEmailAndPassword(
					auth,
					email,
					password
				);
				dispatch(
					setUser({
						uid: userCredential.user.uid,
						email: userCredential.user.email,
						emailVerified: userCredential.user.emailVerified,
						createdAt: userCredential.user.metadata.creationTime,
					})
				);
				return userCredential.user;
			} catch (error) {
                const errorMessage = handleFirebaseError(error);
                dispatch(setError(errorMessage));
				throw error;
			}
		},
		[dispatch]
	);
	
	const loginWithEmail = useCallback( // Login
		async (email, password) => {
			try {
				dispatch(setLoading(true));
				dispatch(clearError());
				const userCredential = await signInWithEmailAndPassword(
					auth,
					email,
					password
				);
				dispatch(
					setUser({
						uid: userCredential.user.uid,
						email: userCredential.user.email,
						emailVerified: userCredential.user.emailVerified,
						lastLoginAt: userCredential.user.metadata.lastSignInTime,
					})
				);
				return userCredential.user;
			} catch (error) {
                const errorMessage = handleFirebaseError(error);
                dispatch(setError(errorMessage));
				throw error;
			}
		},
		[dispatch]
	);

	const signInWithGoogle = useCallback(async () => { // Inicio de sesión con Google
		try {
			dispatch(setLoading(true));
			dispatch(clearError());
			const userCredential = await signInWithPopup(auth, googleProvider);
			dispatch(
				setUser({
					uid: userCredential.user.uid,
					email: userCredential.user.email,
					lastLoginAt: userCredential.user.metadata.lastSignInTime,
				})
			);
			return userCredential.user;
		} catch (error) {
			const errorMessage = handleFirebaseError(error);
            dispatch(setError(errorMessage));
			throw error;
		}
	}, [dispatch]);
	
	const signOut = useCallback(async () => { // Cierre de sesión, funciona con el hook useAuth
		try {
			await firebaseSignOut(auth);
			dispatch(resetAuth());
		} catch (error) {
			dispatch(setError(error.message));
			throw error;
		}
	}, [dispatch]);

	return {
		registerWithEmail,
		loginWithEmail,
		signInWithGoogle,
		signOut,
	};
};
