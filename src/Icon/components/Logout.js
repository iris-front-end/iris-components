import React from 'react';
import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';

export const Logout = props => (
  <SvgIcon
    width={props.width}
    height="22px"
    viewBox="0 0 24 22"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      id="Symbols"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g
        id="Iris---style-guide"
        transform="translate(-222.000000, -1202.000000)"
        {...props}
      >
        <g id="logout-icon" transform="translate(222.000000, 1202.000000)">
          <polyline
            id="Stroke-1812"
            points="13.5 17.5 13.5 21.5 0.5 21.5 0.5 0.5 13.5 0.5 13.5 4.5"
          />
          <path d="M5.5,11.5 L23.5,11.5" id="Stroke-1813" />
          <polyline id="Stroke-1814" points="18.5 6.5 23.5 11.5 18.5 16.5" />
        </g>
      </g>
    </g>
  </SvgIcon>
);

Logout.defaultProps = {
  width: '24px',
};
Logout.propTypes = {
  stroke: PropTypes.string,
  width: PropTypes.string,
};
