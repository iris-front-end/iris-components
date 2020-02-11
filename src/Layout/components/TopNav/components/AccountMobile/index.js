import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';

import Icon from 'components/Icon';

import { Wrapper } from './style';

const mobileMenuId = 'primary-search-account-menu-mobile';

export const AccountMobile = ({ handleMobileMenuOpen }) => (
  <Wrapper>
    <IconButton
      aria-label="show more"
      aria-controls={mobileMenuId}
      aria-haspopup="true"
      onClick={handleMobileMenuOpen}
      color="inherit"
    >
      <Icon type="more-vert" />
    </IconButton>
  </Wrapper>
);

AccountMobile.propTypes = {
  handleMobileMenuOpen: PropTypes.func,
};
