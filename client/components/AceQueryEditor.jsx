import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import 'brace/mode/mysql';
import 'brace/theme/twilight';

const styles = {
  body: {
    width: '60%',
    flexDirection: 'column',
    display: 'flex',
    padding: '10px',
  },
  runButton: {
    background: '#5cb85c',
    border: 'none',
    borderRadius: '2px',
    height: '40px',
    width: '75px',
    marginLeft: 'auto',
    marginRight: '10px',
    marginTop: '10px',
    fontSize: '18px',
    color: 'white',
  },
};

const AceQueryEditor = props => (
  <div style={styles.body}>
    <AceEditor
      mode="mysql"
      theme="twilight"
      name="blah2"
      height={'240px'}
      width={'100%'}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={props.query}
      onChange={newValue => props.handleChange(newValue)}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: true,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />

    <button
      onClick={props.handleSubmit}
      style={styles.runButton}
    >
      Run
    </button>
  </div>
);

AceQueryEditor.propTypes = {
  query: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AceQueryEditor;
