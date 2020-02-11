import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu as MuiMenu, MenuItem } from '@material-ui/core';

import Icon from 'components/Icon';

import { useStyles } from './style';

import i18n from 'helpers/i18n';

const menuId = 'primary-search-account-menu';
const PATH = 'layout.topNav';

export const Menu = ({
  anchorEl,
  isMenuOpen,
  handleMenuClose,
  handleChangeLanguage,
}) => {
  const classes = useStyles();

  const handleClickLanguage = language => () => {
    handleChangeLanguage(language);
    handleMenuClose();
  };

  return (
    <MuiMenu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
      className={classes.menu}
    >
      <MenuItem className={classes.menuItem}>
        <Icon
          type="flag-brazil"
          id="user-account-item-pt-br"
          onClick={handleClickLanguage('pt-BR')}
        />

        <Icon
          type="flag-united-states"
          id="user-account-item-en-us"
          onClick={handleClickLanguage('en-US')}
        />
      </MenuItem>

      <Link id="user-account-item-logout" to="/logout">
        <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
          <Icon
            className={classes.notMobile}
            type="logout"
            stroke="#222"
            width="12px"
          />
          {i18n.t(`${PATH}.exit`)}
        </MenuItem>
      </Link>
    </MuiMenu>
  );
};

Menu.propTypes = {
  anchorEl: oneOfType([PropTypes.bool, PropTypes.object]),
  isMenuOpen: PropTypes.bool,
  handleMenuClose: PropTypes.func,
  handleChangeLanguage: PropTypes.func,
};

export default Menu;
