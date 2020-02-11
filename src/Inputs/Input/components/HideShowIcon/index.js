import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';

import i18n from 'helpers/i18n';

import { HideShowPassword } from './style';

const PATH = 'common.inputs';

const HideShowIcon = ({ id, isHide, onClick }) => (
  <HideShowPassword id={id} onClick={onClick}>
    <Icon type={isHide ? 'eye' : 'eye-slash'} />
    <span>{isHide ? i18n.t(`${PATH}.show`) : i18n.t(`${PATH}.hide`)}</span>
  </HideShowPassword>
);

HideShowIcon.propTypes = {
  id: PropTypes.string,
  isHide: PropTypes.bool,
  onClick: PropTypes.func,
};

export default HideShowIcon;
