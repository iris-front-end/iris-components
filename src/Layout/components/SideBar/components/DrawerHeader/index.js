import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';

import Icon from 'components/Icon';

import { useStyles, Header } from './style';

const DrawerHeader = ({ handleDrawerClose }) => {
  const classes = useStyles();

  return (
    <Header className={classes.drawerHeader}>
      <IconButton
        id="button-close-menu"
        onClick={handleDrawerClose}
        className={classes.menuButton}
      >
        <Icon type="chevron-left" />
      </IconButton>
    </Header>
  );
};

DrawerHeader.propTypes = {
  handleDrawerClose: PropTypes.func,
};

export default DrawerHeader;
