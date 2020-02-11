import React from 'react';
import PropTypes from 'prop-types';

import { PlaceHolderWrap } from './styles';

const PlaceHolder = ({ type, loading, children, textWhite, ...rest }) => (
  <>
    {loading ? (
      <PlaceHolderWrap
        variant={type}
        bgWhite={!textWhite ? 'true' : ''}
        {...rest}
      />
    ) : (
      children
    )}
  </>
);

PlaceHolder.defaultProps = {
  textWhite: false,
};

PlaceHolder.propTypes = {
  textWhite: PropTypes.bool,
  loading: PropTypes.bool,
  type: PropTypes.string.isRequired,
  children: PropTypes.object,
  className: PropTypes.string,
};

export default PlaceHolder;
