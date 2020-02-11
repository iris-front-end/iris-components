import React from 'react';
import { SvgIcon, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  svg: {
    transform: props => (props.rotate ? 'rotate(180deg)' : 'none'),
  },
});

export const ArrowRightStroke = props => {
  const classes = useStyles(props);

  return (
    <SvgIcon
      width="16px"
      height="28px"
      viewBox="0 0 16 28"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.svg}
    >
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <g
          id="Iris---style-guide"
          transform="translate(-524.000000, -1199.000000)"
          strokeWidth="3"
        >
          <polyline
            id="arrow-right-stroke"
            transform="translate(532.000000, 1213.000000) rotate(90.000000) translate(-532.000000, -1213.000000) "
            points="520 1219 532 1207 544 1219"
          />
        </g>
      </g>
    </SvgIcon>
  );
};
ArrowRightStroke.propTypes = {
  stroke: PropTypes.string,
  rotate: PropTypes.string,
};
