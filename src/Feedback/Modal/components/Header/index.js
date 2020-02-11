import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';

import Icon from 'components/Icon';
import Heading from 'components/Typography/Heading';

import { Wrapper, useStyles } from './style';
import colors from 'styles/colors';

const Header = ({ id, titleIcon, title, hasDivider }) => {
  const classes = useStyles();

  return (
    <Wrapper hasIcon={titleIcon}>
      {titleIcon && (
        <Icon
          type={titleIcon}
          stroke={colors.blueGray}
          className={classes.icon}
        />
      )}

      <Heading id={id} type="h2" modal>
        {title}
      </Heading>

      {hasDivider && <Divider />}
    </Wrapper>
  );
};

Header.propTypes = {
  id: PropTypes.string,
  titleIcon: PropTypes.string,
  title: PropTypes.string.isRequired,
  hasDivider: PropTypes.bool,
};

export default Header;
