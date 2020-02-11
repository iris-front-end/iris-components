import React from 'react';
import PropTypes from 'prop-types';
import { easeQuadInOut } from 'd3-ease';
import { CircularProgressbar } from 'react-circular-progressbar';

import AnimatedProgress from './components/AnimatedProgress';

import { AnimatedWrapper } from './style';
import colors from 'styles/colors';

const RadialBar = props => (
  <AnimatedWrapper {...props}>
    <AnimatedProgress {...props} easingFunction={easeQuadInOut}>
      {value => {
        const roundedValue = Math.round(value);
        return (
          <CircularProgressbar
            id={props.id}
            value={value}
            text={`${roundedValue}%`}
            classes={{ text: 'text', trail: 'trail', path: 'path' }}
            strokeWidth={10}
          />
        );
      }}
    </AnimatedProgress>
  </AnimatedWrapper>
);

RadialBar.defaultProps = {
  pathLineCap: 'round',
  textColor: '#333',
  trailColor: '#E8E8E8',
  pathColor: colors.pink,
  trailWidth: 5,
  pathWidth: 9,
  valueStart: 0,
};

RadialBar.propTypes = {
  id: PropTypes.string,
  textColor: PropTypes.string,
  trailColor: PropTypes.string,
  pathColor: PropTypes.string,
  trailWidth: PropTypes.number,
  pathWidth: PropTypes.number,
  pathLineCap: PropTypes.oneOf(['round', 'butt']),
  valueStart: PropTypes.number,
  valueEnd: PropTypes.number,
  duration: PropTypes.number,
};

export default RadialBar;
