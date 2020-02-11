import React from 'react';
import PropTypes from 'prop-types';
import { components } from 'react-select';

const { Option } = components;

export const IconOption = props => (
  <Option {...props}>
    {props.data.icon && (
      <span className="input-select__icon">{props.data.icon}</span>
    )}
    <span>{props.data.label}</span>
  </Option>
);

IconOption.propTypes = {
  data: PropTypes.object,
};

export default IconOption;
