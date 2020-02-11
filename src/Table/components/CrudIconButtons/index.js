import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'components/Inputs/Buttons/IconButton';

import { IconsWrapper, WhiteIconButton } from './style';

const CrudIconButtons = ({ index, onDelete, onEdit, onView }) => (
  <IconsWrapper>
    <WhiteIconButton
      id={`button-view-${index}`}
      iconType="eye"
      onClick={onView}
    />
    <IconButton id={`button-edit-${index}`} iconType="edit" onClick={onEdit} />
    <IconButton
      id={`button-delete-${index}`}
      iconType="trash"
      onClick={onDelete}
    />
  </IconsWrapper>
);

CrudIconButtons.propTypes = {
  index: PropTypes.number,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onView: PropTypes.func,
};

export default CrudIconButtons;
