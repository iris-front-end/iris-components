import React from 'react';
import PropTypes from 'prop-types';

import PlaceHolder from 'components/Placeholder';

import Title from './style';

const Heading = ({ children, loading, ...rest }) => (
  <PlaceHolder
    type="rect"
    width={180}
    height={10}
    loading={loading}
    textWhite={rest.white}
    className={rest.className}
  >
    <Title {...rest}>{children}</Title>
  </PlaceHolder>
);

Heading.propTypes = {
  children: PropTypes.any,
  loading: PropTypes.bool,
  id: PropTypes.string,
  bold: PropTypes.bool,
  modal: PropTypes.bool,
  white: PropTypes.bool,
  center: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.oneOf(['h1', 'h2', 'h3']),
};

export default Heading;
