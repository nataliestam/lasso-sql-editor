import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App.jsx'

const styles = {
  heading: {
    margin: '10px',
    marginLeft: '20px',
  },
  links: {

  },
};

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Header = () => (
  <Router>
    <div>
      <h1 style={styles.heading}>Lasso</h1>
      <Link to="/">Home</Link>
      <Link to="/query">New Query</Link>

      <Route exact path="/" component={Home} />
      <Route path="/query" component={App} />
    </div>
  </Router>
);

export default Header;