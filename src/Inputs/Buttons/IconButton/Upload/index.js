import React from 'react';
import PropTypes from 'prop-types';

import IconButtonComponent from '..';

const UploadIconButton = props => (
  <IconButtonComponent
    {...props}
    id={`${props.id}-button-upload`}
    iconType="upload"
  />
);

UploadIconButton.propTypes = {
  id: PropTypes.string,
};

export default UploadIconButton;
