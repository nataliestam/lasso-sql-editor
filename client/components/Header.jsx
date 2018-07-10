import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const styles = {
  heading: {
    margin: '10px',
    marginLeft: '20px',
  },
  links: {

  },
};

const Header = () => (
  <Router>
    <div>
      <h1 style={styles.heading}>Lasso</h1>
      <Link to="/">Home</Link>
      <Link to="/query">New Query</Link>
    </div>
  </Router>
);

export default Header;
