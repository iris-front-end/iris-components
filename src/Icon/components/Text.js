import React from 'react';
import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';

export const Text = props => (
  <SvgIcon
    width="24px"
    height="22px"
    viewBox="0 0 24 22"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="Symbols"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={props.color}
    >
      <g
        id="Iris---style-guide"
        transform="translate(-113.000000, -1144.000000)"
      >
        <g id="text-icon" transform="translate(113.000000, 1144.000000)">
          <g id="Group-475">
            <path
              d="M14.5,0.5 L4.5,0.5 C2.291,0.5 0.5,2.291 0.5,4.5 L0.5,8.5 C0.5,10.71 2.291,12.5 4.5,12.5 L5.5,12.5 L5.5,16.5 L10,12.5 L14.5,12.5 C16.709,12.5 18.5,10.71 18.5,8.5 L18.5,4.5 C18.5,2.291 16.709,0.5 14.5,0.5 L14.5,0.5 Z"
              id="Stroke-5883"
            />
            <path
              d="M11.5,16 C11.5,17.381 12.619,18.5 14,18.5 L16.5,18.5 L19.5,21.5 L19.5,18.5 L21,18.5 C22.381,18.5 23.5,17.381 23.5,16 L23.5,14 C23.5,12.619 22.381,11.5 21,11.5"
              id="Stroke-5884"
            />
          </g>
        </g>
      </g>
    </g>
  </SvgIcon>
);

Text.propTypes = {
  stroke: PropTypes.string,
  color: PropTypes.string,
};
