import React from 'react';
import PropTypes from 'prop-types';

import Card from 'components/Card';
import Heading from 'components/Typography/Heading';

const CardWithTitle = ({
  id,
  title,
  children,
  width,
  height,
  minHeight,
  margin,
}) => (
  <Card width={width} height={height} margin={margin} minHeight={minHeight}>
    <Heading type="h2" bold id={id}>
      {title}
    </Heading>
    {children}
  </Card>
);

CardWithTitle.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  minHeight: PropTypes.string,
  margin: PropTypes.string,
};

export default CardWithTitle;
