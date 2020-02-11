import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Animate } from 'react-move';

const AnimatedProgress = props => {
  const [isAnimated, setIsAnimated] = useState(false);

  const updateAnimate = () => {
    setIsAnimated(true);
  };

  useEffect(updateAnimate);

  return (
    <Animate
      start={() => ({
        value: props.valueStart,
      })}
      update={() => ({
        value: [isAnimated ? props.valueEnd : props.valueStart],
        timing: {
          duration: props.duration * 1000,
          ease: props.easingFunction,
        },
      })}
    >
      {({ value }) => props.children(value)}
    </Animate>
  );
};

AnimatedProgress.defaultProps = {
  valueStart: 0,
};

AnimatedProgress.propTypes = {
  valueStart: PropTypes.number,
  valueEnd: PropTypes.number,
  duration: PropTypes.number,
  children: PropTypes.func,
  easingFunction: PropTypes.func,
};

export default AnimatedProgress;
