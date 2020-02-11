import React from 'react';
import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';

export const Users = props => (
  <SvgIcon
    width="25px"
    height="22px"
    viewBox="0 0 25 22"
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
        transform="translate(-59.000000, -1144.000000)"
      >
        <g id="users-icon" transform="translate(60.000000, 1145.000000)">
          <g id="Group-266">
            <path
              d="M8.997,19.964 L18,19.964 C18,19.964 18,16.612 17.526,15.183 C17.113,13.94 14.13,13.108 11,11.928 L11,9.428 C11,9.428 12,8.809 12,6.428 C13,6.428 13,4.428 12,4.428 C12,4.194 13.078,2.75 12.75,1.428 C12.276,-0.476 6.599,-0.476 6.125,1.428 C3.756,0.952 5,4.109 5,4.428 L5,6.428 C5,8.809 7,9.428 7,9.428 L7,11.928 C4.222,12.984 0.886,13.94 0.474,15.183 C0,16.612 0,19.964 0,19.964 L8.997,19.964 L8.997,19.964 Z"
              id="Stroke-1066"
            />
            <path
              d="M20.4999,19.964 L22.9999,19.964 C22.9999,19.964 22.9999,16.612 22.5259,15.183 C22.1129,13.94 19.1299,12.608 15.9999,11.428 L15.9999,9.928 C15.9999,9.928 16.9999,9.309 16.9999,6.928 C17.9999,6.928 17.9999,4.928 16.9999,4.928 C16.9999,4.694 18.0779,3.066 17.7499,1.744 C17.5279,0.854 15.6249,-0.554 14.1249,0.446"
              id="Stroke-1067"
              strokeLinecap="round"
            />
          </g>
        </g>
      </g>
    </g>
  </SvgIcon>
);

Users.propTypes = {
  stroke: PropTypes.string,
  color: PropTypes.string,
};
