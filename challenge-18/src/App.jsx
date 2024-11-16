import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';

import { AboutUs, HomePage, LoginPage, Dashboard } from './pages/index';
import NavComponent from './components/NavComponent';

import PrivateRoute from './utils/PrivateRoute';
import { useAuth } from './context/authContext';

const App = () => {
	return (
		<>
			<NavComponent />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="/login" element={<LoginPage />} />

				<Route element={<PrivateRoute />}>
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
			</Routes>
		</>
	);
};

const AppWithRouter = () => {
	const location = useLocation();
	const { dispatch } = useAuth();

	useEffect(() => {
		if (location.pathname !== '/login') {
			dispatch({ type: 'SET_LAST_PAGE', payload: location.pathname });
			return;
		}
	}, [location.pathname, dispatch]);

	return <App />;
};

const MainApp = () => (
	<Router>
		<AppWithRouter />
	</Router>
);

export default MainApp;
