import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';

import CustomSelect from './components/CustomSelect';

import { useStyles } from './style';

const SelectInput = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <FormControl className={`${classes.formControl} ${className}`}>
      <CustomSelect {...rest} />
    </FormControl>
  );
};

SelectInput.propTypes = {
  className: PropTypes.string,
};

export default SelectInput;
