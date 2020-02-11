import React from 'react';
import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';

export const Members = props => (
  <SvgIcon
    width="48px"
    height="42px"
    viewBox="0 0 48 42"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="linearGradient-1">
        <stop stopColor="#FC065E" offset="0%" />
        <stop stopColor="#E93B1E" offset="100%" />
      </linearGradient>
      <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="linearGradient-2">
        <stop stopColor="#FC065E" offset="0%" />
        <stop stopColor="#E93B1E" offset="100%" />
      </linearGradient>
    </defs>
    <g
      id="Symbols"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinejoin="round"
    >
      <g
        id="Iris---style-guide"
        transform="translate(-63.000000, -1254.000000)"
        strokeWidth="2"
      >
        <g id="users-" transform="translate(64.000000, 1255.000000)">
          <path
            d="M17.994,39.928 L36,39.928 C36,39.928 36,33.224 35.052,30.366 C34.226,27.88 28.26,26.216 22,23.856 L22,18.856 C22,18.856 24,17.618 24,12.856 C26,12.856 26,8.856 24,8.856 C24,8.388 26.156,5.5 25.5,2.856 C24.552,-0.952 13.198,-0.952 12.25,2.856 C7.512,1.904 10,8.218 10,8.856 L10,12.856 C10,17.618 14,18.856 14,18.856 L14,23.856 C8.444,25.968 1.772,27.88 0.948,30.366 C0,33.224 0,39.928 0,39.928 L17.994,39.928 L17.994,39.928 Z"
            id="Stroke-1066"
            stroke="url(#linearGradient-1)"
          />
          <path
            d="M40.9998,39.928 L45.9998,39.928 C45.9998,39.928 45.9998,33.224 45.0518,30.366 C44.2258,27.88 38.2598,25.216 31.9998,22.856 L31.9998,19.856 C31.9998,19.856 33.9998,18.618 33.9998,13.856 C35.9998,13.856 35.9998,9.856 33.9998,9.856 C33.9998,9.388 36.1558,6.132 35.4998,3.488 C35.0558,1.708 31.2498,-1.108 28.2498,0.892"
            id="Stroke-1067"
            stroke="url(#linearGradient-2)"
            strokeLinecap="round"
          />
        </g>
      </g>
    </g>
  </SvgIcon>
);

Members.propTypes = {
  stroke: PropTypes.string,
};
