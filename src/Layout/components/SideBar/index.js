import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from '@material-ui/core';

import DrawerHeader from './components/DrawerHeader';
import DrawerBody from './components/DrawerBody';

import { useStyles } from './style';

const SideBar = ({ open, handleDrawerClose }) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
      transitionDuration={300}
    >
      <DrawerHeader handleDrawerClose={handleDrawerClose} />
      <DrawerBody />
    </Drawer>
  );
};

SideBar.propTypes = {
  open: PropTypes.bool,
  handleDrawerClose: PropTypes.func,
};

export default SideBar;
