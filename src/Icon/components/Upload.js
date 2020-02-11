import React from 'react';
import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';

export const Upload = props => (
  <SvgIcon
    viewBox="0 0 17 17"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.674 12.555v1.248a1.872 1.872 0 0 1-1.871 1.87H3.197a1.871 1.871 0 0 1-1.87-1.87v-1.248M8.5 1.326v11.157M3.935 5.891L8.5 1.326l4.565 4.565" />
    </g>
  </SvgIcon>
);

Upload.propTypes = {
  stroke: PropTypes.string,
  color: PropTypes.string,
};
