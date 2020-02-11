import React from 'react';
import PropTypes from 'prop-types';

import PlaceHolder from 'components/Placeholder';

import Text from './style';

const Paragraph = ({ children, loading, ...rest }) => (
  <PlaceHolder
    type="rect"
    width={180}
    height={10}
    loading={loading}
    textWhite={rest.white}
    className={rest.className}
  >
    <Text {...rest}>{children}</Text>
  </PlaceHolder>
);

Paragraph.propTypes = {
  children: PropTypes.any,
  loading: PropTypes.bool,
  id: PropTypes.string,
  bold: PropTypes.bool,
  white: PropTypes.bool,
  center: PropTypes.bool,
  className: PropTypes.string,
  like: PropTypes.oneOf(['h1', 'h2', 'h3']),
};

export default Paragraph;
