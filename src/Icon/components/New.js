import React from 'react';
import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';

export const New = props =>
  props.stroke ? (
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
        stroke={props.stroke}
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="Iris---style-guide"
          transform="translate(-113.000000, -1201.000000)"
        >
          <g id="new-icon" transform="translate(113.000000, 1201.000000)">
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
  ) : (
    <SvgIcon
      width="22px"
      height="22px"
      viewBox="0 0 22 22"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="a" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#FC065E" />
          <stop offset="100%" stopColor="#E93B1E" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none">
        <circle cx="11" cy="11" r="11" fill="url(#a)" />
        <g
          stroke="#FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M11 5v12M17 11H5" />
        </g>
      </g>
    </SvgIcon>
  );

New.propTypes = {
  stroke: PropTypes.string,
};
