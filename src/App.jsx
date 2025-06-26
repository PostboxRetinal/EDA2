import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/authContext';
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
