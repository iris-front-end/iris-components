import React from 'react';
import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';

export const CheckCircle = props => (
  <SvgIcon
    width="74"
    height="74"
    viewBox="0 0 74 74"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
    >
      <path d="M52.086 26.44l-22.63 21.12-7.542-7.543" />
      <path d="M71.698 37c0 19.166-15.539 34.698-34.698 34.698C17.831 71.698 2.302 56.166 2.302 37S17.832 2.302 37 2.302c19.16 0 34.698 15.532 34.698 34.698z" />
    </g>
  </SvgIcon>
);

CheckCircle.propTypes = {
  stroke: PropTypes.string,
  color: PropTypes.string,
};
