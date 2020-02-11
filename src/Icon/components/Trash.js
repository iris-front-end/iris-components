import React from 'react';
import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';

export const Trash = props => (
  <SvgIcon
    viewBox="0 0 15 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.563 15.375h10v-12.5h-10zM5.063 2.875h5V1h-5zM1 2.875h13.75M5.063 5.063v7.5M7.563 5.063v7.5M10.063 5.063v7.5" />
    </g>
  </SvgIcon>
);

Trash.propTypes = {
  stroke: PropTypes.string,
  color: PropTypes.string,
};
