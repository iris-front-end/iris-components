import React from 'react';
import PropTypes from 'prop-types';

import Input from 'components/Inputs/Input';

const Password = props => (
  <Input
    id={props.id}
    onChange={({ target: { value: inputValue } }) => {
      props.onChangeValue && props.onChangeValue(inputValue);
    }}
    type="password"
    hasLabel={props.hasLabel}
    labelText={props.labelText}
    placeholder={props.placeholder}
    height={props.height}
    width={props.width}
    name={props.name}
    hasHidePasswordOption={props.hasHidePasswordOption}
  />
);

Password.propTypes = {
  id: PropTypes.string,
  hasLabel: PropTypes.bool,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string,
  hasHidePasswordOption: PropTypes.bool,
  onChangeValue: PropTypes.func,
};

export default Password;
