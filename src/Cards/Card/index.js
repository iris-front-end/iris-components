import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';

import { useStyles } from './style';

const CardContainer = props => {
  const classes = useStyles(props);
  return (
    <Card className={`${classes.card} ${props.className}`}>
      {props.children}
    </Card>
  );
};

CardContainer.defaultProps = {
  width: '100%',
  height: '100%',
  margin: '0 auto',
  direction: 'column',
};

CardContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  width: PropTypes.string,
  height: PropTypes.string,
  minHeight: PropTypes.string,
  bgImage: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

export default CardContainer;
