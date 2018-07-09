import React from 'react';
import PropTypes from 'prop-types';
import Scatter from './charts/Scatter.jsx';

const Chart = (props) => {
  if (props.data.length > 0) {
    if (
      props.data[0].length === 2
      && typeof props.data[0][0] === 'string'
      && typeof props.data[0][1] === 'number'
    ) {
      return <div>I will be a bar chart!</div>;
    } else if (
      props.data[0].length === 3
      && typeof props.data[0][0] === 'string'
      && typeof props.data[0][1] === 'number'
      && typeof props.data[0][2] === 'number'
    ) {
      return <div>I will be a bar chart!</div>;
    } else if (
      props.data[0].length === 2
      && typeof props.data[0][0] === 'number'
      && typeof props.data[0][1] === 'number'
    ) {
      return <Scatter data={props.data} columnNames={props.columnNames} />;
    }
  }

  return null;
};

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  columnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Chart;
