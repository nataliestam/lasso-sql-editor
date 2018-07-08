import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import QueryEditor from './components/QueryEditor.jsx';
import QueryDetails from './components/QueryDetails.jsx';
import ResultsTable from './components/ResultsTable.jsx';

const styles = {
  body: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  heading: {
    margin: '10px',
    marginLeft: '20px',
  },
  query: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '50px',
  },
  results: {

  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 2,
      title: '',
      description: '',
      query: '',
      results: [],
    };

    this.runQuery = this.runQuery.bind(this);
    this.saveQuery = this.saveQuery.bind(this);
  }

  // retrieves query text based on id
  getQuery() {
    axios.get(`/query/saved/${this.state.id}`)
      .then((response) => {
        this.setState({
          id: response._id,
          title: response.title,
          description: response.description,
          query: response.query,
        }, () => {
          this.runQuery(); // just realized that this shouldn't take a param, should just use the state
        });
      }).catch((error) => {
        console.log(error);
      });
  }

  // runs the query in the query editor
  runQuery(query) {
    this.setState({ query }, () => {
      axios.post('/query/run', {
        query: this.state.query,
      }).then((response) => {
        this.setState({
          results: response.data.rows,
        });
      }).catch((error) => {
        console.log(error);
      });
    });
  }

  // saves the query, title, and desc to mongo
  saveQuery(title, description) {
    this.setState({ title, description }, () => {
      axios.post('/query/saved', {
        title: this.state.title,
        description: this.state.description,
        query: this.state.query,
      }).then((response) => {
        this.setState({
          id: response.data._id,
        });
      }).catch((error) => {
        console.log(error);
      });
    });
  }

  render() {
    return (
      <div style={styles.body}>
        <h1 style={styles.heading}>Lasso</h1>
        <div style={styles.query}>
          <QueryEditor handleSubmit={this.runQuery} />
          <QueryDetails handleSubmit={this.saveQuery} />
        </div>
        <div style={styles.results}>
          <ResultsTable data={this.state.results} />
        </div>
      </div>
    );
  }
}

export default App;
