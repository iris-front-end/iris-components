import React from 'react';
import PropTypes from 'prop-types';
import ReactEcharts from 'echarts-for-react';

import RadialBar from './components/RadialBar';

import { charUtils } from './utils';

const Chart = props => {
  return props.type === 'radial' ? (
    <RadialBar {...props} />
  ) : (
    <ReactEcharts
      id={props.id}
      option={charUtils.getOptions(props)}
      style={{
        height: '100%',
        width: '100%',
      }}
    />
  );
};

Chart.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  graphicData: PropTypes.array,
};

export default Chart;
