import React from 'react';
import PropTypes from 'prop-types';
import Scatter from './charts/Scatter.jsx';
import BarChart2Col from './charts/BarChart2Col.jsx';
import BarChart3Col from './charts/BarChart3Col.jsx';

const Chart = (props) => {
  if (props.data.length > 0) {
    if (
      props.data[0].length === 2
      && typeof props.data[0][0] === 'string'
      && typeof parseInt(props.data[0][1]) === 'number'
    ) {
      return <BarChart2Col data={props.data} columnNames={props.columnNames} />;
    } else if (
      props.data[0].length === 3
      && typeof props.data[0][0] === 'string'
      && typeof parseInt(props.data[0][1]) === 'number'
      && typeof parseInt(props.data[0][2]) === 'number'
    ) {
      return <BarChart3Col data={props.data} columnNames={props.columnNames} />;
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
