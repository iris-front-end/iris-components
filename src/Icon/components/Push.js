import React from 'react';
import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';

export const Push = props => (
  <SvgIcon
    width="40px"
    height="40px"
    viewBox="0 0 40 40"
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
        transform="translate(-227.000000, -1255.000000)"
        strokeWidth="1.66666667"
      >
        <g id="push" transform="translate(227.000000, 1255.000000)">
          <path
            d="M30.8333333,32.5 L30.8333333,25 C30.8333333,20.495 28.08,16.6316667 24.1666667,15 C24.1666667,12.6983333 22.2983333,10.8333333 20,10.8333333 C17.6966667,10.8333333 15.8333333,12.6983333 15.8333333,15 C11.915,16.6316667 9.16666667,20.495 9.16666667,25 L9.16666667,32.5 C9.16666667,34.34 7.675,35.8333333 5.83333333,35.8333333 L34.1666667,35.8333333 C32.325,35.8333333 30.8333333,34.34 30.8333333,32.5 L30.8333333,32.5 Z"
            id="Stroke-3107"
            stroke={props.stroke}
          />
          <path
            d="M23.3333333,35.8333333 C23.3333333,37.6733333 21.8416667,39.1666667 20,39.1666667 C18.1566667,39.1666667 16.6666667,37.6733333 16.6666667,35.8333333"
            id="Stroke-3108"
            stroke={props.stroke}
          />
          <path
            d="M5.83333333,15 C5.83333333,9.93833333 9.93333333,5.83333333 15,5.83333333"
            id="Stroke-3109"
            stroke={props.stroke}
          />
          <path
            d="M0.833333333,15 C0.833333333,7.17666667 7.17333333,0.833333333 15,0.833333333"
            id="Stroke-3110"
            stroke={props.stroke}
          />
          <path
            d="M34.1666667,15 C34.1666667,9.93833333 30.0583333,5.83333333 25,5.83333333"
            id="Stroke-3111"
            stroke={props.stroke}
          />
          <path
            d="M39.1666667,15 C39.1666667,7.17666667 32.8216667,0.833333333 25,0.833333333"
            id="Stroke-3112"
            stroke={props.stroke}
          />
        </g>
      </g>
    </g>
  </SvgIcon>
);

Push.defaultProps = {
  stroke: '#FC065E',
};

Push.propTypes = {
  stroke: PropTypes.string,
};
