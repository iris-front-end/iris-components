import React from 'react';
import PropTypes from 'prop-types';

export const NoInformation = ({ stroke }) => (
  <svg
    width="102px"
    height="83px"
    viewBox="0 0 102 83"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/*Generator: Sketch 48.2 (47327) - http://www.bohemiancoding.com/sketch */}
    <title>warning</title>
    <desc>Created with Sketch.</desc>
    <defs />
    <g
      id="Detalhes-mensagem-Copy-5"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      transform="translate(-670.000000, -355.000000)"
    >
      <g id="warning" transform="translate(670.000000, 355.000000)">
        <g
          id="Group-1197"
          transform="translate(20.000000, 28.000000)"
          stroke={stroke}
          strokeLinejoin="round"
          strokeWidth="2.5"
        >
          <path
            d="M26.5,36.7962391 L26.5,18.4979783"
            id="Stroke-3209"
            strokeLinecap="round"
          />
          <polygon
            id="Stroke-3210"
            strokeLinecap="round"
            points="52.8043478 52.8043478 0.195652174 52.8043478 26.5 0.195652174"
          />
          <path
            d="M27.6956522,44.4347826 C27.6956522,45.0947826 27.16,45.6304348 26.5,45.6304348 C25.84,45.6304348 25.3043478,45.0947826 25.3043478,44.4347826 C25.3043478,43.7747826 25.84,43.2391304 26.5,43.2391304 C27.16,43.2391304 27.6956522,43.7747826 27.6956522,44.4347826 L27.6956522,44.4347826 Z"
            id="Stroke-3211"
          />
        </g>
        <circle id="Oval-8" fill={stroke} cx="2.5" cy="71.5" r="2.5" />
        <circle id="Oval-8-Copy-4" fill={stroke} cx="51.5" cy="2.5" r="2.5" />
        <circle id="Oval-8-Copy-2" fill={stroke} cx="98.5" cy="63.5" r="3.5" />
        <g
          id="Group-36"
          transform="translate(11.500000, 17.500000) rotate(-90.000000) translate(-11.500000, -17.500000) translate(1.000000, 9.000000)"
          fill={stroke}
        >
          <circle id="Oval-8-Copy" cx="16" cy="5" r="5" />
          <circle id="Oval-8-Copy-3" cx="2" cy="15" r="2" />
        </g>
        <g
          id="Group-36-Copy"
          transform="translate(84.928962, 32.347326) rotate(-11.000000) translate(-84.928962, -32.347326) translate(74.428962, 23.847326)"
          fill={stroke}
        >
          <circle id="Oval-8-Copy" cx="16" cy="5" r="5" />
          <circle id="Oval-8-Copy-3" cx="2" cy="15" r="2" />
        </g>
      </g>
    </g>
  </svg>
);

NoInformation.propTypes = {
  stroke: PropTypes.string,
};
