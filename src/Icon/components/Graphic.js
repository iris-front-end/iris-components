import React from 'react';
import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';

export const Graphic = props => (
  <SvgIcon
    width="24px"
    height="23px"
    viewBox="0 0 24 23"
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
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g
        id="Iris---style-guide"
        transform="translate(-167.000000, -1143.000000)"
      >
        <g id="graphic-icon" transform="translate(167.000000, 1143.000000)">
          <g id="Group-768">
            <path d="M0.5,22.5 L23.5,22.5" id="Stroke-8265" />
            <polyline
              id="Stroke-8266"
              points="4.5 22.5 4.5 17.5 1.5 17.5 1.5 22.5"
            />
            <polyline
              id="Stroke-8267"
              points="10.5 22.5 10.5 12.5 7.5 12.5 7.5 22.5"
            />
            <polyline
              id="Stroke-8268"
              points="16.5 22.5 16.5 14.5 13.5 14.5 13.5 22.5"
            />
            <polyline
              id="Stroke-8269"
              points="22.5 22.5 22.5 7.5 19.5 7.5 19.5 22.5"
            />
            <polyline id="Stroke-8270" points="21.5 0.5 15 7.5 9 5.5 3 10.5" />
            <polyline id="Stroke-8271" points="17.5 0.5 21.5 0.5 21.5 4.5" />
          </g>
        </g>
      </g>
    </g>
  </SvgIcon>
);

Graphic.propTypes = {
  stroke: PropTypes.string,
  color: PropTypes.string,
};
