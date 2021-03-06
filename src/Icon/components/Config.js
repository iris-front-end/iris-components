import React from 'react';
import { SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';

export const Config = props => (
  <SvgIcon
    width={props.width}
    height="24px"
    viewBox="0 0 24 24"
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
        transform="translate(-168.000000, -1201.000000)"
        {...props}
      >
        <g id="config-icon" transform="translate(168.000000, 1201.000000)">
          <path
            d="M20.2539,13.5 L23.4999,13.5 L23.4999,10.5 L20.2529,10.5 C20.0439,9.633 19.7019,8.319 19.2499,7.578 L21.5459,5.283 L18.7169,2.454 L16.4199,4.75 C15.6799,4.298 14.3669,3.957 13.4999,3.748 L13.4999,0.5 L10.4999,0.5 L10.4999,3.748 C9.6329,3.957 8.3189,4.298 7.5789,4.75 L5.2819,2.454 L2.4529,5.283 L4.7499,7.579 C4.2979,8.319 3.9559,9.633 3.7459,10.5 L0.4999,10.5 L0.4999,13.5 L3.7459,13.5 C3.9559,14.367 4.2979,15.681 4.7499,16.421 L2.4529,18.718 L5.2819,21.546 L7.5779,19.249 C8.3189,19.702 9.6329,20.044 10.4999,20.254 L10.4999,23.5 L13.4999,23.5 L13.4999,20.254 C14.3669,20.044 15.6809,19.702 16.4199,19.25 L18.7179,21.546 L21.5459,18.718 L19.2499,16.421 C19.7019,15.681 20.0439,14.367 20.2539,13.5 L20.2539,13.5 Z"
            id="Stroke-3034"
          />
          <path
            d="M12,16.5 C9.515,16.5 7.5,14.486 7.5,12 C7.5,9.515 9.515,7.5 12,7.5 C14.485,7.5 16.5,9.515 16.5,12 C16.5,14.486 14.485,16.5 12,16.5 Z"
            id="Stroke-3035"
          />
        </g>
      </g>
    </g>
  </SvgIcon>
);

Config.defaultProps = {
  width: '24px',
};
Config.propTypes = {
  stroke: PropTypes.string,
  width: PropTypes.string,
};
