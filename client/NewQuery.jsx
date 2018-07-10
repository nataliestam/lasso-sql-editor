import React from 'react';
import axios from 'axios';
import QueryEditor from './components/QueryEditor.jsx';
import QueryDetails from './components/QueryDetails.jsx';
import Chart from './components/Chart.jsx';
import ResultsTable from './components/ResultsTable.jsx';

const styles = {
  body: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  query: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '50px',
  },
  results: {

  },
};

class NewQuery extends React.Component {
  constructor() {
    super();
    this.state = {
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
    this.updateQueryTitle = this.updateQueryTitle.bind(this);
    this.updateQueryDesc = this.updateQueryDesc.bind(this);
  }

  updateQueryText(e) {
    this.setState({
      query: e.target.value,
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

  updateQueryTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  updateQueryDesc(e) {
    this.setState({
      description: e.target.value,
    });
  }

  // saves the query, title, and desc to mongo
  saveQuery() {
    axios.post('/query/saved', {
      title: this.state.title,
      description: this.state.description,
      query: this.state.query,
    }).then((response) => {
      console.log(`query saved!  id is ${response.data._id}`);
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div style={styles.body}>
        <div style={styles.query}>
          <QueryEditor
            query={this.state.query}
            handleChange={this.updateQueryText}
            handleSubmit={this.runQuery}
          />
          <QueryDetails
            title={this.state.title}
            description={this.state.description}
            handleTitleChange={this.updateQueryTitle}
            handleDescChange={this.updateQueryDesc}
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

export default NewQuery;
