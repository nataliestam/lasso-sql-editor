import React from 'react';
import PropTypes from 'prop-types';
import QueryEditor from './components/QueryEditor.jsx';
import QueryDetails from './components/QueryDetails.jsx';

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
    console.log(query);

    this.setState({ query });

    // get query results from database
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
      </div>
    );
  }
}

export default App;
