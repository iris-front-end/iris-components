import React from 'react';
import PropTypes from 'prop-types';

import Heading from 'components/Typography/Heading';

const CustomHeading = ({ id, title }) =>
  typeof title === 'string' ? (
    <Heading id={id} type="h1">
      {title}
    </Heading>
  ) : (
    title
  );

CustomHeading.propTypes = {
  id: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.object,
  ]),
};

export default CustomHeading;
