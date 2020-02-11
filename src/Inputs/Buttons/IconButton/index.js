import React from 'react';
import PropTypes from 'prop-types';
import MuiIconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import PlaceHolder from 'components/Placeholder';
import Icon from 'components/Icon';

import { useStyles } from './style';

const IconButton = ({
  id,
  secondary,
  loading,
  iconType,
  onClick,
  stroke,
  fill,
  className,
}) => {
  const classes = useStyles({ secondary, stroke, fill });

  return (
    <PlaceHolder
      loading={loading}
      secondary
      type="circle"
      width={25}
      height={25}
      className={classes.placeholder}
    >
      <MuiIconButton
        id={`icon-button-${id}`}
        className={clsx(classes.iconButton, className)}
        onClick={onClick}
      >
        <Icon type={iconType} className={classes.icon} />
      </MuiIconButton>
    </PlaceHolder>
  );
};

IconButton.propTypes = {
  id: PropTypes.string,
  secondary: PropTypes.bool,
  loading: PropTypes.bool,
  iconType: PropTypes.string,
  onClick: PropTypes.func,
  stroke: PropTypes.string,
  fill: PropTypes.string,
  className: PropTypes.string,
};

export default IconButton;
