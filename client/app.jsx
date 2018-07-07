import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import QueryEditor from './components/QueryEditor.jsx';
import QueryDetails from './components/QueryDetails.jsx';
import ResultsTable from './components/ResultsTable.jsx';

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      query: '',
      results: [],
    };

    this.runQuery = this.runQuery.bind(this);
    this.saveQuery = this.saveQuery.bind(this);
  }

  runQuery(query) {
    this.setState({ query });

    axios.post('/query/run', {
      query,
    }).then((response) => {
      this.setState({
        results: response.data.rows,
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  saveQuery(title, description) {
    console.log(title, description);

    this.setState({ title, description });

    // save query to database
  }

  render() {
    return (
      <div>
        <h1>Lasso</h1>
        <QueryEditor handleSubmit={this.runQuery} />
        <QueryDetails handleSubmit={this.saveQuery} />
        <ResultsTable data={this.state.results} />
      </div>
    );
  }
}

export default App;
