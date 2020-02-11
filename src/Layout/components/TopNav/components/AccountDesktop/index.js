import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Avatar } from '@material-ui/core';

import { useStyles, Wrapper } from './style';

const menuId = 'primary-search-account-menu';

export const AccountDesktop = ({ handleProfileMenuOpen }) => {
  const classes = useStyles();

  return (
    <Wrapper>
      <IconButton
        id="button-user-account"
        edge="end"
        aria-label="account of current user"
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={handleProfileMenuOpen}
        color="inherit"
        className={classes.button}
      >
        <Avatar alt="Gisela" className={classes.avatar}>
          G
        </Avatar>
      </IconButton>
    </Wrapper>
  );
};

AccountDesktop.propTypes = {
  handleProfileMenuOpen: PropTypes.func,
};
