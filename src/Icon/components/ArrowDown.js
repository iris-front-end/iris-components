import React from 'react';
import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';
export const ArrowDown = props =>
  props.stroke ? (
    <SvgIcon
      width="14px"
      height="8px"
      viewBox="0 0 14 8"
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
          transform="translate(-483.000000, -1209.000000)"
          strokeWidth="2"
        >
          <polyline
            id="arrow-down-stroke"
            transform="translate(490.000000, 1213.000000) scale(1, -1) translate(-490.000000, -1213.000000) "
            points="484 1216 490 1210 496 1216"
          />
        </g>
      </g>
    </SvgIcon>
  ) : (
    <SvgIcon
      width="13px"
      height="8px"
      viewBox="0 0 13 8"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.191815824,0.822657567 L6.1180285,7.83803848 C6.29622735,8.04898819 6.61169459,8.07553801 6.8226443,7.89733915 C6.84403696,7.87926779 6.86387361,7.85943115 6.88194497,7.83803848 L12.8081576,0.822657567 C12.9863565,0.611707858 12.9598067,0.296240618 12.748857,0.118041764 C12.6586238,0.0418176582 12.5443186,6.0542682e-12 12.4261994,6.05782091e-12 L0.573774061,6.24378327e-12 C0.297631686,6.24811314e-12 0.0737740607,0.223857625 0.0737740607,0.5 C0.0737740607,0.618119197 0.115591719,0.732424367 0.191815824,0.822657567 Z"
        id="Combined-Shape"
      />
    </SvgIcon>
  );

ArrowDown.propTypes = {
  stroke: PropTypes.string,
};
