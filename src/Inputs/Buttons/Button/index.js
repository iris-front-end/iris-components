import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Label from './components/Label';
import Loading from './components/Loading';

import { Button, ButtonWrapper } from './style';

const ButtonComponent = ({
  children,
  disabled,
  icon,
  id,
  loading,
  onClick,
  rounded,
  size,
  type,
  to,
  className,
}) => (
  <ButtonWrapper
    type={type}
    size={size}
    rounded={rounded}
    className={className}
  >
    <Button
      buttontype={type}
      component={to && Link}
      disabled={disabled}
      id={id}
      onClick={onClick}
      to={to}
    >
      {loading ? <Loading /> : <Label icon={icon}>{children}</Label>}
    </Button>
  </ButtonWrapper>
);

ButtonComponent.defaultProps = {
  color: 'primary',
  loading: false,
  rounded: false,
  size: 'medium',
  type: 'primary',
};

ButtonComponent.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  id: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'full']),
  type: PropTypes.oneOf([
    'primary',
    'text',
    'dark',
    'login',
    'semi-dark',
    'outlined',
    'outlined-dark',
  ]),
  to: PropTypes.string,
  className: PropTypes.string,
};

export default ButtonComponent;
