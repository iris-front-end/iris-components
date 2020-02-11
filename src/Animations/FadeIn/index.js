import React from 'react';
import PropTypes from 'prop-types';

import { Fade } from './style';

const FadeIn = ({ children, keyframes }) => (
  <Fade keyframes={keyframes}>{children}</Fade>
);

FadeIn.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  keyframes: PropTypes.object,
};

export default FadeIn;
