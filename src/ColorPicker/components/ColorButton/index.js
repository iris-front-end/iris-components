import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

import { useStyles } from './style';

const ColorButton = props => {
  const classes = useStyles(props);

  return (
    <Button id={props.id} className={classes.button} onClick={props.onClick} />
  );
};

ColorButton.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default ColorButton;
