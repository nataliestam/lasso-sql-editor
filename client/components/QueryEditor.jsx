import React from 'react';
import PropTypes from 'prop-types';

class QueryEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRun = this.handleRun.bind(this);
  }

  handleChange(e) {
    this.setState({
      query: e.target.value,
    });
  }

  handleRun() {
    this.props.handleSubmit(this.state.query);
  }

  render() {
    return (
      <div id="query-editor">
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <button onClick={this.handleRun}>Run</button>
      </div>
    );
  }
}

QueryEditor.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default QueryEditor;
