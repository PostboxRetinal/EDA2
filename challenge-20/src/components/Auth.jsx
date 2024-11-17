import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAuth } from '../hooks/useAuth';

const Auth = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isRegistering, setIsRegistering] = useState(false);

	// Get auth state and functions
	const { registerWithEmail, loginWithEmail, signInWithGoogle, signOut } = useAuth();
	const { user, loading, error } = useSelector((state) => state.auth);

	const isAuthenticated = useMemo(() => !!user, [user]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (isRegistering) {
				await registerWithEmail(email, password);
			} else {
				await loginWithEmail(email, password);
			}
			// Limpia el formulario
			setEmail('');
			setPassword('');
		} catch (error) {
			console.error('Auth error:', error);
		}
	};

	
	const isValidForm = useMemo(() => { // Validación del formulario
		return email.includes('@') && password.length >= 6;
	}, [email, password]);

	return (
		<div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
			{error && (
				<div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>
			)}

			{!isAuthenticated ? (
				<>
					<div className="mb-4 text-center">
						<h2 className="text-2xl font-bold">
							{isRegistering ? 'Crea una cuenta' : 'Loggeate en tu cuenta'}
						</h2>
					</div>

					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Email
							</label>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
								required
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">
								Contraseña
							</label>
							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
								required
							/>
						</div>

						<div className="space-y-3">
							<button
								type="submit"
								disabled={loading || !isValidForm}
								className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50">
								{loading
									? 'Cargando...'
									: isRegistering
									? 'Registrarse'
									: 'Login'}
							</button>

							<button
								type="button"
								onClick={() => setIsRegistering(!isRegistering)}
								className="w-full text-sm text-indigo-600 hover:text-indigo-500">
								{isRegistering
									? 'Ya tienes una cuenta? Iniciar Sesión'
									: 'No tienes una cuenta? Regístrate'}
							</button>

							<div className="relative">
								<div className="absolute inset-0 flex items-center">
									<div className="w-full border-t border-gray-300" />
								</div>
								<div className="relative flex justify-center text-sm">
									<span className="px-2 bg-white text-gray-500">
										O Inicia sesión con
									</span>
								</div>
							</div>

							<button
								type="button"
								onClick={signInWithGoogle}
								disabled={loading}
								className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								<svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
									<path
										fill="#4285F4"
										d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
									/>
									<path
										fill="#34A853"
										d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
									/>
									<path
										fill="#FBBC05"
										d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
									/>
									<path
										fill="#EA4335"
										d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
									/>
								</svg>
								Google
							</button>
						</div>
					</form>
				</>
			) : (
				<div className="text-center">
					<div className="mb-4">
						<h2 className="text-xl font-semibold">Bienvenido al sitio web!</h2>
						<p className="text-gray-600">{user.email}</p>
					</div>

					{user.photoURL && (
						<img
							src={user.photoURL}
							alt="Profile"
							className="w-16 h-16 rounded-full mx-auto mb-4"
						/>
					)}

					<button
						onClick={signOut}
						className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
						Cerrar Sesión
					</button>
				</div>
			)}
		</div>
	);
};

export default Auth;
