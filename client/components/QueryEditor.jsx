import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  body: {
    width: '60%',
    flexDirection: 'column',
    display: 'flex',
  },
  editor: {
    height: '240px',
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

    this.handleChange = this.handleChange.bind(this);
    this.handleRun = this.handleRun.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e);
  }

  handleRun() {
    this.props.handleSubmit();
  }

  render() {
    return (
      <div style={styles.body}>
        <textarea
          style={styles.editor}
          type="text"
          value={this.props.query}
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
  query: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default QueryEditor;
