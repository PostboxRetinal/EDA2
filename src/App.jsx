import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavComponent from './components/NavComponent';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App = () => {
	return (
		<Router>
			<div className="min-h-screen bg-gray-50">
				<NavComponent />
				<main className="container mx-auto px-4 py-8 w-full">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/services" element={<Services />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
};

export default App;
