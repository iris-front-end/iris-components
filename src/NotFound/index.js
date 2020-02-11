import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';

import { Text, NotFoundWrapper } from './style';

const NotFound = props => (
  <NotFoundWrapper className="no-information">
    <Icon type="no-information" {...props} />
    <Text id={props.id}>{props.text}</Text>
  </NotFoundWrapper>
);

NotFound.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  stroke: PropTypes.string,
};

export default NotFound;
