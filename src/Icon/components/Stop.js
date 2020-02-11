import React from 'react';
import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';

export const Stop = props => (
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
      stroke={props.stroke || 'none'}
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g
        id="Iris---style-guide"
        transform="translate(-335.000000, -1201.000000)"
      >
        <g
          id="stop-icon"
          transform="translate(346.500000, 1212.500000) rotate(45.000000) translate(-346.500000, -1212.500000) translate(335.000000, 1201.000000)"
        >
          <path
            d="M22.5,11.5 C22.5,17.574 17.575,22.5 11.5,22.5 C5.425,22.5 0.5,17.574 0.5,11.5 C0.5,5.424 5.425,0.5 11.5,0.5 C17.575,0.5 22.5,5.424 22.5,11.5 L22.5,11.5 Z"
            id="Stroke-2952"
          />
          <path d="M11.5,5.5 L11.5,17.5" id="Stroke-2953" />
          <path d="M17.5,11.5 L5.5,11.5" id="Stroke-2954" />
        </g>
      </g>
    </g>
  </SvgIcon>
);

Stop.propTypes = {
  stroke: PropTypes.string,
};
