import React from 'react';
import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';

export const Search = props => (
  <SvgIcon
    width="17px"
    height="17px"
    viewBox="0 0 17 17"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      id="Symbols"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinejoin="round"
      stroke={props.color}
    >
      <g
        id="Iris---style-guide"
        transform="translate(-63.000000, -1204.000000)"
      >
        <g id="search-icon" transform="translate(64.000000, 1205.000000)">
          <path
            d="M12.5217391,6.26086957 C12.5217391,9.71843478 9.71843478,12.5217391 6.26086957,12.5217391 C2.80330435,12.5217391 0,9.71843478 0,6.26086957 C0,2.80330435 2.80330435,0 6.26086957,0 C9.71843478,0 12.5217391,2.80330435 12.5217391,6.26086957 L12.5217391,6.26086957 Z"
            id="Stroke-1417"
          />
          <path
            d="M10.6874609,10.6875391 L15.5,15.5"
            id="Stroke-1418"
            strokeLinecap="round"
          />
        </g>
      </g>
    </g>
  </SvgIcon>
);

Search.propTypes = {
  color: PropTypes.string,
};
