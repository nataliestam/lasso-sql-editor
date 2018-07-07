import React from 'react';
import PropTypes from 'prop-types';

const ResultsTable = (props) => {
  if (props.data.length > 0) {
    return (
      <div>
        {props.data[0].hi}
      </div>
    );
  }

  return null;
};

ResultsTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ResultsTable;
