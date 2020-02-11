import React from 'react';
import PropTypes from 'prop-types';
import MaterialCheckbox from '@material-ui/core/Checkbox';

import { FormControlLabel } from './style';

const Checkbox = props => (
  <FormControlLabel
    control={
      <MaterialCheckbox
        {...props}
        inputProps={{
          'aria-label': props.ariaLabel,
        }}
      />
    }
    label={props.label}
  />
);

Checkbox.propTypes = {
  ariaLabel: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

export default Checkbox;
