import React from 'react';
import PropTypes from 'prop-types';

import { StyledLabel } from './style';

const Label = ({ children, id }) =>
  children ? <StyledLabel id={id}>{children}</StyledLabel> : '';

Label.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string,
};

export default Label;
