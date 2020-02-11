import React from 'react';
import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';

export const Edit = props => (
  <SvgIcon
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
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
        transform="translate(-276.000000, -1201.000000)"
      >
        <g id="edit-icon" transform="translate(276.000000, 1201.000000)">
          <path
            d="M7.2944,21.6748 L0.8284,23.1918 L2.3454,16.7268 L17.9444,1.1248 C18.7264,0.3438 19.9934,0.3438 20.7744,1.1248 L22.8964,3.2458 C23.6764,4.0278 23.6764,5.2928 22.8964,6.0748 L7.2944,21.6748 L7.2944,21.6748 Z"
            id="Stroke-153"
          />
          <path d="M22.1909,6.7842 L17.2379,1.8312" id="Stroke-154" />
          <path d="M20.7642,8.2114 L15.8232,3.2464" id="Stroke-155" />
          <path d="M7.5464,21.4243 L2.5964,16.4743" id="Stroke-156" />
        </g>
      </g>
    </g>
  </SvgIcon>
);

Edit.propTypes = {
  stroke: PropTypes.string,
};
