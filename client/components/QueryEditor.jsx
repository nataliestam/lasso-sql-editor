import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  body: {
    width: '60%',
    flexDirection: 'column',
    display: 'flex',
  },
  editor: {
    height: '300px',
    margin: '10px',
    color: 'white',
    fontFamily: '"Courier New", Courier, monospace',
    fontSize: '16px',
    backgroundColor: 'black',
    border: 'none',
    resize: 'none',
    outline: 'none',
  },
  runButton: {
    background: '#5cb85c',
    border: 'none',
    borderRadius: '2px',
    height: '40px',
    width: '75px',
    marginLeft: 'auto',
    marginRight: '10px',
    fontSize: '18px',
    color: 'white',
  },
};

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
      <div style={styles.body}>
        <textarea
          style={styles.editor}
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleRun}
          style={styles.runButton}
        >
          Run
        </button>
      </div>
    );
  }
}

QueryEditor.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default QueryEditor;
