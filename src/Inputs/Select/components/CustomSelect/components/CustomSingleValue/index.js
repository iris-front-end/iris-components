import React from 'react';
import PropTypes from 'prop-types';

const CustomSingleValue = ({ data }) => (
  <div className="input-select">
    <div className="input-select__single-value">
      {data.icon && <span className="input-select__icon">{data.icon}</span>}
      <span>{data.label}</span>
    </div>
  </div>
);

CustomSingleValue.propTypes = {
  data: PropTypes.object,
};

export default CustomSingleValue;
