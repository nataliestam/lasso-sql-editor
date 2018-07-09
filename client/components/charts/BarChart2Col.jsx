import React from 'react';
import PropTypes from 'prop-types';
import { FlexibleWidthXYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, VerticalBarSeries } from 'react-vis';

const BarChart2Col = props => (
  <FlexibleWidthXYPlot height={300} margin={50} xType="ordinal">
    <HorizontalGridLines style={{ stroke: 'grey' }} />
    <VerticalBarSeries data={props.data.map(row => ({ x: row[0], y: row[1] }))} />
    <XAxis
      title={props.columnNames[0]}
      tickFormat={v => (
        <tspan>
          {v.split(' ').map(w => <tspan x="0" dy="1em">{w}</tspan>)}
        </tspan>
      )}
    />
    <YAxis title={props.columnNames[1]} />
  </FlexibleWidthXYPlot>
);

BarChart2Col.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  columnNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BarChart2Col;
