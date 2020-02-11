import React from 'react';
import PropTypes from 'prop-types';

import IconButtonComponent from '..';

const EditIconButton = props => (
  <IconButtonComponent
    {...props}
    id={`${props.id}-button-edit`}
    iconType="edit"
  />
);

EditIconButton.propTypes = {
  id: PropTypes.string,
};

export default EditIconButton;
