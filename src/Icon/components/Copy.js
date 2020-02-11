import React from 'react';
import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';

export const Copy = props => (
  <SvgIcon
    width="18px"
    height="24px"
    viewBox="0 0 18 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="Symbols"
      stroke="inherit"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g
        id="Iris---style-guide"
        transform="translate(-393.000000, -1201.000000)"
      >
        <g id="copy-icon" transform="translate(393.000000, 1201.000000)">
          <polygon
            id="Stroke-343"
            points="17.5 20.5 3.5 20.5 3.5 0.5 11.5 0.5 17.5 6.5"
          />
          <polyline id="Stroke-344" points="11.5 0.5 11.5 6.5 17.5 6.5" />
          <polyline
            id="Stroke-345"
            points="14.5 20.5 14.5 23.5 0.5 23.5 0.5 3.5 3.5 3.5"
          />
        </g>
      </g>
    </g>
  </SvgIcon>
);

Copy.propTypes = {
  stroke: PropTypes.string,
};
