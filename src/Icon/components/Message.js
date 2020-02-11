import React from 'react';
import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';

export const Message = props => (
  <SvgIcon
    width="48px"
    height="40px"
    viewBox="0 0 48 40"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
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
        transform="translate(-296.000000, -1255.000000)"
        stroke={props.stroke}
        strokeWidth="2"
      >
        <g id="message" transform="translate(297.000000, 1256.000000)">
          <path
            d="M46,15 C46,23.25 39.25,30 31,30 L25,30 L17,38 L17,30 L15,30 C6.75,30 0,23.25 0,15 C0,6.75 6.75,0 15,0 L31,0 C39.25,0 46,6.75 46,15 L46,15 Z"
            id="Stroke-646"
          />
        </g>
      </g>
    </g>
  </SvgIcon>
);

Message.defaultProps = {
  stroke: '#FC065E',
};

Message.propTypes = {
  stroke: PropTypes.string,
};
