import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavComponent from './components/NavComponent';
import { AppContextProvider } from './context/AppContext';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

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