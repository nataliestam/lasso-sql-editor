import React from 'react';
import PropTypes from 'prop-types';

const ResultHeader = props => (
  <thead>
    <tr>
      {
        props.row.map(col => (
          <th key={col}>{col}</th>
        ))
      }
    </tr>
  </thead>
);

ResultHeader.propTypes = {
  row: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default ResultHeader;
