import React from 'react';
import PropTypes from 'prop-types';

import { StyledCircle } from './../../style';

const Circle = ({ id, width }) => <StyledCircle id={id} width={width} />;

Circle.propTypes = {
  id: PropTypes.string,
  width: PropTypes.number,
};

export default Circle;
