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
      id: this.props.queryId,
      title: '',
      description: '',
      query: '',
      columnNames: [],
      data: [],
      error: false,
    };

    this.runQuery = this.runQuery.bind(this);
    this.saveQuery = this.saveQuery.bind(this);
    this.updateQueryText = this.updateQueryText.bind(this);
  }

  componentDidMount() {
    if (parseInt(this.state.id) > 0) {
      this.getQuery();
    }
  }

  // retrieves query text based on id
  getQuery() {
    axios.get(`/query/saved/${this.state.id}`)
      .then((response) => {
        console.log(response)
        this.setState({
          title: response.data.title,
          description: response.data.description,
          query: response.data.query,
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
        error: false,
      });
    }).catch((error) => {
      if (error.response) {
        this.setState({
          columnNames: [],
          data: [],
          error: true,
        });
      } else {
        console.log(error);
      }
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
          <QueryDetails
            title={this.state.title}
            description={this.state.description}
            handleSubmit={this.saveQuery}
          />
        </div>
        <div>
          <Chart
            columnNames={this.state.columnNames}
            data={this.state.data}
          />
        </div>
        <div style={styles.results}>
          <ResultsTable
            columnNames={this.state.columnNames}
            data={this.state.data}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  queryId: PropTypes.string,
};

App.defaultProps = {
  queryId: '0',
};

export default App;
