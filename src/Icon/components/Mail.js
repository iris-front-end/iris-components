import React from 'react';
import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';

export const Mail = props => (
  <SvgIcon
    width="59px"
    height="40px"
    viewBox="0 0 59 40"
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
        transform="translate(-139.000000, -1255.000000)"
        strokeWidth="2.66666667"
      >
        <g id="mais" transform="translate(140.000000, 1256.000000)">
          <path
            d="M56.3333333,33.6666667 C56.3333333,35.8746667 54.5413333,37.6666667 52.3333333,37.6666667 L4.33333333,37.6666667 C2.12533333,37.6666667 0.333333333,35.8746667 0.333333333,33.6666667 L0.333333333,4.33333333 C0.333333333,2.12266667 2.12533333,0.333333333 4.33333333,0.333333333 L52.3333333,0.333333333 C54.5413333,0.333333333 56.3333333,2.12266667 56.3333333,4.33333333 L56.3333333,33.6666667 L56.3333333,33.6666667 Z"
            id="Stroke-406"
            stroke={props.stroke}
          />
          <polyline
            id="Stroke-407"
            stroke={props.stroke}
            points="55 1.66666667 28.3333333 23 1.66666667 1.66666667"
          />
        </g>
      </g>
    </g>
  </SvgIcon>
);

Mail.defaultProps = {
  stroke: '#FC065E',
};

Mail.propTypes = {
  stroke: PropTypes.string,
};
