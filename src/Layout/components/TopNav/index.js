import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import clsx from 'clsx';

import { AccountDesktop } from './components/AccountDesktop';
import { AccountMobile } from './components/AccountMobile';
import Icon from 'components/Icon';
import SelectInput from 'components/Inputs/Select';
import Menu from './components/Menu';

import { useStyles, SettingsWrapper, TopNavWrapper } from './style';
import { AvatarWrapper, IconWrapper } from 'components/Inputs/Select/style';

import { audiences } from './utils';
import { size } from 'styles/media-query';

const TopNav = ({ open, handleDrawerOpen, handleChangeLanguage }) => {
  const classes = useStyles(open);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const theme = useTheme();
  const laptopSize = Number(size.laptop.replace('px', ''));
  const isMobile = useMediaQuery(theme.breakpoints.down(laptopSize));

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleChange = event => {
    //TODO: handle event
  };

  const formatValuesToSelect = data =>
    data.map(audience => ({
      value: audience.id,
      label: audience.name,
      icon: audience.avatar ? (
        <AvatarWrapper alt="Remy Sharp" src={audience.avatar} />
      ) : (
        <IconWrapper>{audience.name.substring(0, 1)}</IconWrapper>
      ),
    }));

  return (
    <TopNavWrapper>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            id="button-open-menu"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Icon type="menu" />
          </IconButton>

          <SettingsWrapper>
            <SelectInput
              id="select-audience"
              placeholder="Audiência"
              light
              items={audiences}
              options={formatValuesToSelect(audiences)}
              handleChange={handleChange}
            />
            <AccountDesktop handleProfileMenuOpen={handleProfileMenuOpen} />
            <AccountMobile handleMobileMenuOpen={handleMobileMenuOpen} />
          </SettingsWrapper>
        </Toolbar>
      </AppBar>
      {/* desktop */}
      <Menu
        anchorEl={anchorEl}
        isMenuOpen={!isMobile && isMenuOpen}
        handleMenuClose={handleMenuClose}
        handleChangeLanguage={handleChangeLanguage}
      />
      {/* mobile */}
      <Menu
        anchorEl={mobileMoreAnchorEl}
        isMenuOpen={isMobile && isMobileMenuOpen}
        handleMenuClose={handleMenuClose}
        handleChangeLanguage={handleChangeLanguage}
      />
    </TopNavWrapper>
  );
};

TopNav.propTypes = {
  open: PropTypes.bool,
  handleDrawerOpen: PropTypes.func,
  handleChangeLanguage: PropTypes.func,
};

export default TopNav;
