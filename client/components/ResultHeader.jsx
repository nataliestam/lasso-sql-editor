import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  header: {
    textAlign: 'left',
    paddingBottom: '5px'
  },
};

const ResultHeader = props => (
  <thead>
    <tr>
      {
        props.row.map(col => (
          <th
            style={styles.header}
            key={col}
          >
            {col}
          </th>
        ))
      }
    </tr>
  </thead>
);

ResultHeader.propTypes = {
  row: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default ResultHeader;
