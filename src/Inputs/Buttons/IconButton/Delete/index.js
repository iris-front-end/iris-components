import React from 'react';
import PropTypes from 'prop-types';

import IconButtonComponent from '..';

const DeleteIconButton = props => (
  <IconButtonComponent
    {...props}
    id={`${props.id}-button-delete`}
    iconType="trash"
  />
);

DeleteIconButton.propTypes = {
  id: PropTypes.string,
};

export default DeleteIconButton;
