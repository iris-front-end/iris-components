import React from 'react';
import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';

export const Details = props => (
  <SvgIcon
    width="26px"
    height="12px"
    viewBox="0 0 26 12"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="linearGradient-1">
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
    >
      <g
        id="Iris---style-guide"
        transform="translate(-435.000000, -1269.000000)"
      >
        <g id="details" transform="translate(435.000000, 1269.000000)">
          <g id="Rectangle-2" fill="url(#linearGradient-1)">
            <rect id="Rectangle" x="0" y="0" width="26" height="12" rx="6" />
          </g>
          <g
            id="Group-50"
            transform="translate(6.000000, 4.000000)"
            stroke="#FFFFFF"
          >
            <path
              d="M3.5,2.0039 C3.5,1.1759 2.861,0.5039 2,0.5039 C1.14,0.5039 0.5,1.1759 0.5,2.0039 C0.5,2.8339 1.14,3.5039 2,3.5039 C2.861,3.5039 3.5,2.8339 3.5,2.0039 L3.5,2.0039 Z"
              id="Stroke-101"
            />
            <path
              d="M8.5,2.0039 C8.5,1.1759 7.861,0.5039 7,0.5039 C6.14,0.5039 5.5,1.1759 5.5,2.0039 C5.5,2.8339 6.14,3.5039 7,3.5039 C7.861,3.5039 8.5,2.8339 8.5,2.0039 L8.5,2.0039 Z"
              id="Stroke-103"
            />
            <path
              d="M13.5,2.0039 C13.5,1.1759 12.861,0.5039 12,0.5039 C11.14,0.5039 10.5,1.1759 10.5,2.0039 C10.5,2.8339 11.14,3.5039 12,3.5039 C12.861,3.5039 13.5,2.8339 13.5,2.0039 L13.5,2.0039 Z"
              id="Stroke-105"
            />
          </g>
        </g>
      </g>
    </g>
  </SvgIcon>
);

Details.propTypes = {
  stroke: PropTypes.string,
};
