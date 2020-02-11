import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { size } from 'lodash';

const LinkCell = ({ id, link, children }) =>
  size(link) ? (
    <Link id={`${id}-link`} to={link}>
      {children}
    </Link>
  ) : (
    children
  );

LinkCell.propTypes = {
  id: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.any,
};

export default LinkCell;
