import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import QueryEditor from './components/QueryEditor.jsx';
import QueryDetails from './components/QueryDetails.jsx';
import Chart from './components/Chart.jsx';
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
      query: 'select title, price, 7 as a_number from related_products where product_id = 4;',
      columnNames: [],
      data: [],
    };

    this.runQuery = this.runQuery.bind(this);
    this.saveQuery = this.saveQuery.bind(this);
    this.updateQueryText = this.updateQueryText.bind(this);
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
          this.runQuery();
        });
      }).catch((error) => {
        console.log(error);
      });
  }

  updateQueryText(query) {
    this.setState({
      query,
    });
  }

  // runs the query in the query editor
  runQuery() {
    axios.post('/query/run', {
      query: this.state.query,
    }).then((response) => {
      this.setState({
        columnNames: response.data.columns,
        data: response.data.data,
      });
    }).catch((error) => {
      console.log(error);
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
          <QueryEditor
            query={this.state.query}
            handleChange={this.updateQueryText}
            handleSubmit={this.runQuery}
          />
          <QueryDetails handleSubmit={this.saveQuery} />
        </div>
        <div>
          <Chart
            columnNames={this.state.columnNames}
            data={this.state.data}
          />
        </div>
        <div style={styles.results}>
          <ResultsTable columnNames={this.state.columnNames} data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
