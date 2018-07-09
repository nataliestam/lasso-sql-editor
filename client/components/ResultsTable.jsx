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
  }

  return null;
};

ResultsTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  columnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ResultsTable;
