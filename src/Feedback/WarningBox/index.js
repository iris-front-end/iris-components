import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';

import { BoxWrapper } from './style';

const iconType = {
  valid: 'done',
  error: 'clear',
  warning: 'warning',
};

const WarningBox = props => (
  <BoxWrapper {...props}>
    <Icon type={iconType[props.type]} stroke="none" />
    <span id={props.id}>{props.message}</span>
  </BoxWrapper>
);

WarningBox.propTypes = {
  id: PropTypes.string,
  message: PropTypes.string,
  height: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.oneOf(['valid', 'error', 'warning']),
  show: PropTypes.bool,
};

export default WarningBox;
