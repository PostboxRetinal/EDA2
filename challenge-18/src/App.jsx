import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { useAuth, AuthProvider } from './context/authContext';
import NavComponent from './components/NavComponent';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

const App = () => {
	const currentUser = { name: 'adminDebug' }; // Dato de ejemplo

	return (
		<>
			<NavComponent />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="/login" element={<LoginPage />} />

				<Route element={<PrivateRoute />}>
					<Route path="/dashboard" element={<Dashboard user={currentUser} />} />
				</Route>
			</Routes>
		</>
	);
};

const AppWithRouter = () => {
	const location = useLocation();
	const { dispatch } = useAuth();

	return <App />;
};

const Root = () => (
	<AuthProvider>
		<Router>
			<AppWithRouter />
		</Router>
	</AuthProvider>
);

export default Root;
