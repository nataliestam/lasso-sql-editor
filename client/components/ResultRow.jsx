import React from 'react';
import PropTypes from 'prop-types';

const ResultRow = props => (
  <tr>
    {
      Object.keys(props.row).map(col => (
        <td key={col}>{props.row[col]}</td>
      ))
    }
  </tr>
);

ResultRow.propTypes = {
  row: PropTypes.object.isRequired,
};


export default ResultRow;
