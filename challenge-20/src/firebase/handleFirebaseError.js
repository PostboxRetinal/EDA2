export const handleFirebaseError = (error) => {
	const errorCode = error?.code || error?.message || 'auth/unknown';

	switch (errorCode) {
        // Errores de autenticación
		case 'auth/email-already-in-use':
			return 'Este email ya está en uso. Por favor, intenta con otro.';

		case 'auth/invalid-email':
			return 'Email inválido. Por favor, intenta con otro.';

		case 'auth/operation-not-allowed':
			return 'Operación no permitida. Por favor, intenta más tarde.';

		case 'auth/weak-password':
			return 'Contraseña débil. Por favor, intenta con una más segura.';

		case 'auth/user-disabled':
			return 'Usuario deshabilitado. Por favor, contacta al soporte.';

		case 'auth/user-not-found':
			return 'Usuario no encontrado. Por favor, intenta con otro.';

		case 'auth/wrong-password':
			return 'Contraseña incorrecta. Por favor, intenta de nuevo.';

        // Errores de ventanas emergentes con la auth de Google
		case 'auth/popup-blocked':
			return 'Alerta de bloqueo de ventanas emergentes. Por favor, habilita las ventanas emergentes.';

		case 'auth/popup-closed-by-user':
			return 'La ventana emergente fue cerrada por el usuario. Por favor, intenta de nuevo.';

		case 'auth/cancelled-popup-request':
			return 'Solicitud de ventana emergente cancelada. Por favor, intenta de nuevo.';

		case 'auth/account-exists-with-different-credential':
			return 'La cuenta ya existe con credenciales diferentes. Por favor, intenta con otro método.';

		// Errores de red
		case 'auth/network-request-failed':
			return 'Error de red. Por favor, verifica tu conexión a internet.';

		// Errores de tiempo de espera
		case 'auth/too-many-requests':
			return 'Demasiadas solicitudes. Por favor, intenta más tarde.';

		// Errores de servidor
		case 'auth/internal-error':
			return 'Error interno. Por favor, intenta más tarde.';

		default:
			return 'Error desconocido. Por favor, intenta más tarde.';
	}
};
