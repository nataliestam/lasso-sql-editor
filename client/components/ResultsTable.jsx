import React from 'react';
import PropTypes from 'prop-types';
import ResultHeader from './ResultHeader.jsx';
import ResultRow from './ResultRow.jsx';

const styles = {
  table: {
    fontSize: '14px',
    marginTop: '25px',
  },
};

const ResultsTable = (props) => {
  if (props.data.length > 0) {
    return (
      <table style={styles.table}>
        <ResultHeader row={props.columnNames} />
        <tbody>
          {props.data.map((row, i) => <ResultRow key={i} row={row} />)}
        </tbody>
      </table>
    );
  } else if (props.error) {
    return (
      <div>Error!  Please check your query and retry.</div>
    );
  }

  return null;
};

ResultsTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  columnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  error: PropTypes.bool.isRequired,
};

export default ResultsTable;
