import React from 'react';
import PropTypes from 'prop-types';

const Chart = (props) => {
  // if (typeof )


  if (props.data.length > 0) {
    return <div>I will be a chart!</div>;
  }

  return null;
};

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  columnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Chart;
