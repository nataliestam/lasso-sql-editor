import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NewQuery from './NewQuery.jsx';
import SavedQuery from './SavedQuery.jsx';
import Home from './Home.jsx';

const styles = {
  body: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  header: {
    margin: '10px',
    marginLeft: '20px',
    fontSize: '45px',
  },
  links: {
    margin: '20px',
  },
};

const Header = () => (
  <Router>
    <div>
      <div style={styles.body}>
        <span style={styles.header}>Lasso</span>
        <Link style={styles.links} to="/">Home</Link>
        <Link style={styles.links} to="/new">New Query</Link>
      </div>

      <Route exact path="/" component={Home} />
      <Route path="/new" component={NewQuery} />
      <Route path="/saved/:id" component={SavedQuery} />
    </div>
  </Router>
);

export default Header;
