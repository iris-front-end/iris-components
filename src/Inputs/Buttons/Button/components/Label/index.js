import React from 'react';
import PropTypes from 'prop-types';

import { Icon, IconWrapper } from './style';

const Label = ({ children, icon }) => (
  <>
    {icon && (
      <IconWrapper>
        <Icon type={icon} size="20px" />
      </IconWrapper>
    )}
    {children}
  </>
);

Label.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.string,
};

export default Label;
