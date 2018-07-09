import React from 'react';
import PropTypes from 'prop-types';
import { XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, MarkSeries } from 'react-vis';

const Scatter = props => (
  <XYPlot height={300} width={1000}>
    <VerticalGridLines style={{ stroke: 'grey' }} />
    <HorizontalGridLines style={{ stroke: 'grey' }} />
    <XAxis title={props.columnNames[0]} />
    <YAxis title={props.columnNames[1]} />
    <MarkSeries data={props.data.map(row => ({ x: row[0], y: row[1] }))} />
  </XYPlot>
);

Scatter.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  columnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Scatter;
