import React from 'react';
import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';

export const Help = props => (
  <SvgIcon
    width="23px"
    height="23px"
    viewBox="0 0 23 23"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="Symbols"
      stroke={props.color}
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinejoin="round"
    >
      <g
        id="Iris---style-guide"
        transform="translate(-221.000000, -1143.000000)"
      >
        <g id="help-icon" transform="translate(221.000000, 1143.000000)">
          <path
            d="M22.5,11.5 C22.5,17.575 17.575,22.5 11.5,22.5 C5.425,22.5 0.5,17.575 0.5,11.5 C0.5,5.425 5.425,0.5 11.5,0.5 C17.575,0.5 22.5,5.425 22.5,11.5 L22.5,11.5 Z"
            id="Stroke-3215"
            strokeLinecap="round"
          />
          <path
            d="M8.5,9 C8.5,7.344 9.843,6 11.5,6 C13.156,6 14.5,7.344 14.5,9 C14.5,10.658 13.156,12 11.5,12 L11.5,15"
            id="Stroke-3216"
            strokeLinecap="round"
          />
          <path
            d="M12,17.5 C12,17.776 11.776,18 11.5,18 C11.224,18 11,17.776 11,17.5 C11,17.224 11.224,17 11.5,17 C11.776,17 12,17.224 12,17.5 L12,17.5 Z"
            id="Stroke-3217"
          />
        </g>
      </g>
    </g>
  </SvgIcon>
);

Help.propTypes = {
  stroke: PropTypes.string,
  color: PropTypes.string,
};
