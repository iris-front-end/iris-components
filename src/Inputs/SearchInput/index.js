import React from 'react';
import PropTypes from 'prop-types';
import { InputBase } from '@material-ui/core';

import Icon from 'components/Icon';

import i18n from 'helpers/i18n';

import { useStyles, IconWrapper, SearchWrapper } from './style';

const SearchInput = ({ id, fullWidth, styleType, placeholder, onChange }) => {
  const classes = useStyles({ fullWidth });

  return (
    <SearchWrapper styleType={styleType} className={classes.searchWrapper}>
      <IconWrapper className={classes.searchIcon}>
        <Icon type="search" stroke="#535353" />
      </IconWrapper>
      <InputBase
        id={id}
        placeholder={
          placeholder ? placeholder : i18n.t('components.searchInput')
        }
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={({ target: { value } }) => onChange(value)}
      />
    </SearchWrapper>
  );
};

SearchInput.defaultProps = {
  fullWidth: false,
  styleType: 'dark',
};

SearchInput.propTypes = {
  id: PropTypes.string,
  fullWidth: PropTypes.bool,
  styleType: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchInput;
