import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ColorButton from './components/ColorButton';
import Popover from './components/Popover';

const ColorPicker = ({ id, onChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentColor, setCurrentColor] = useState('#000');

  const handleChange = (color, event) => {
    setCurrentColor(color.hex);
    onChange(color, event);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <ColorButton
        id={id}
        onClick={({ currentTarget }) => setAnchorEl(currentTarget)}
        color={currentColor}
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        onChange={handleChange}
      />
    </>
  );
};

ColorPicker.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
};

export default ColorPicker;
