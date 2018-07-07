import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  row: {
    borderTop: '1px solid #ddd',
    textAlign: 'left',
    padding: '5px',
  },
};

const ResultRow = props => (
  <tr>
    {
      Object.keys(props.row).map(col => (
        <td
          style={styles.row}
          key={col}
        >
          {props.row[col]}
        </td>
      ))
    }
  </tr>
);

ResultRow.propTypes = {
  row: PropTypes.object.isRequired,
};


export default ResultRow;
