import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

import HideShowIcon from './components/HideShowIcon';
import Label from './../Label';
import Icon from 'components/Icon';

import {
  InputHeaderWrapper,
  ErrorLabel,
  InputWrapper,
  useStyles,
} from './style';

const Input = props => {
  const {
    id,
    labelText,
    hasHidePasswordOption,
    valid,
    type,
    name,
    placeholder,
    invalidMessage,
    onChange,
    variant,
    fullWidth,
    icon,
    disabled,
    multiline,
    value,
    light,
  } = props;

  const [isHide, setIsHide] = useState(true);
  const classes = useStyles(props);

  return (
    <InputWrapper className={props.className} light={light}>
      <InputHeaderWrapper hasLabel={labelText}>
        <Label id={`label-${id}`}>{labelText}</Label>

        {hasHidePasswordOption && (
          <HideShowIcon
            id={`hide-show-${id}`}
            isHide={isHide}
            onClick={() => setIsHide(!isHide)}
          />
        )}
      </InputHeaderWrapper>

      <TextField
        id={id}
        value={value}
        className={classes.textField}
        variant={variant}
        name={name}
        multiline={multiline}
        type={hasHidePasswordOption && !isHide ? 'text' : type}
        error={valid === false}
        placeholder={placeholder}
        onChange={onChange}
        fullWidth={fullWidth}
        disabled={disabled}
        InputProps={
          icon && {
            endAdornment: (
              <InputAdornment position="start">
                <Icon type={icon} size="20" stroke="#ccc" />
              </InputAdornment>
            ),
          }
        }
      />
      <ErrorLabel id={`error-${id}`}>
        {valid === false && invalidMessage}
      </ErrorLabel>
    </InputWrapper>
  );
};

Input.defaultProps = {
  variant: 'outlined',
  width: '100%',
  height: '40px',
  multiline: false,
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  hasHidePasswordOption: PropTypes.bool,
  valid: PropTypes.bool,
  invalidMessage: PropTypes.string,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  variant: PropTypes.string,
  fullWidth: PropTypes.bool,
  icon: PropTypes.element,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  multiline: PropTypes.bool,
  light: PropTypes.bool,
};

export default Input;
