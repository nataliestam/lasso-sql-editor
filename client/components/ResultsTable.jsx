import React from 'react';
import PropTypes from 'prop-types';
import ResultHeader from './ResultHeader.jsx';
import ResultRow from './ResultRow.jsx';

const ResultsTable = (props) => {
  if (props.data.length > 0) {
    return (
      <table>
        {Object.keys(props.data[0]).map(col => <ResultHeader col={col} />)}
        {props.data.map(row => <ResultRow row={row} />)}
      </table>
    );
  }

  return null;
};

ResultsTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ResultsTable;
