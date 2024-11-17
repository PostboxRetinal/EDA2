import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppContextProvider } from '../context/AppContext';
import NavComponent from './NavComponent';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = () => {
	return (
		<AppContextProvider>
			<Router>
				<NavComponent />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</Router>
		</AppContextProvider>
	);
};

export default App;
