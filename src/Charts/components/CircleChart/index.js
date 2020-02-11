import React from 'react';
import PropTypes from 'prop-types';

import Target from './components/Target';
import Circle from './components/Circle';

import { circleChartUtils } from './utils';

import { Wrapper } from './style';

const CircleChart = ({ id, data }) => (
  <Wrapper>
    <Target id={`${id}-target`} />
    <Circle
      id={`${id}-chart`}
      width={circleChartUtils.getPercent(data.total, data.users)}
    />
  </Wrapper>
);

CircleChart.propTypes = {
  id: PropTypes.string,
  data: PropTypes.object,
};

export default CircleChart;
