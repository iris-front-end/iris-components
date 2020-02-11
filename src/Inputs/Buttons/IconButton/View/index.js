import React from 'react';
import PropTypes from 'prop-types';

import IconButtonComponent from '..';

const ViewIconButton = props => (
  <IconButtonComponent
    {...props}
    id={`${props.id}-button-view`}
    iconType="eye"
  />
);

ViewIconButton.propTypes = {
  id: PropTypes.string,
};

export default ViewIconButton;
