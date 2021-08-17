import '../style/App.css';
import '../style/all.min.css';
import '../style/animate.min.css';
import '../style/bootstrap.min.css';
import '../style/style.css';
import '../style/responsive.css';

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import WOW from 'wowjs';

import Home from './Home';
import About from './About';
import Resume from './Resume';
import ContactMe from './ContactMe';

function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false
  }).init();	

  }, []);

  return <Router>
      <Route exact path="/" component = { Home } />
      <Route path="/home" component = { Home } />
      <Route path="/about" component = { About} />
      <Route path="/resume" component = { Resume} />
      <Route path="/contact-me" component = { ContactMe} />
    
  </Router>
}

export default App;
