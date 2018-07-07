import React from 'react';
import PropTypes from 'prop-types';
import ResultHeader from './ResultHeader.jsx';
import ResultRow from './ResultRow.jsx';

const ResultsTable = (props) => {
  if (props.data.length > 0) {
    return (
      <table>
        <ResultHeader row={Object.keys(props.data[0])} />
        <tbody>
          {props.data.map((row, i) => <ResultRow key={i} row={row} />)}
        </tbody>
      </table>
    );
  }

  return null;
};

ResultsTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ResultsTable;
