import React from 'react';
import PropTypes from 'prop-types';
import { GithubPicker } from 'react-color';

import { StyledPopover } from './style';

const Popover = ({ open, anchorEl, onClose, onChange }) => (
  <StyledPopover open={open} anchorEl={anchorEl} onClose={onClose}>
    <GithubPicker triangle="top-right" onChange={onChange} />
  </StyledPopover>
);

Popover.propTypes = {
  open: PropTypes.bool,
  anchorEl: PropTypes.object,
  onClose: PropTypes.func,
  onChange: PropTypes.func,
};

export default Popover;
