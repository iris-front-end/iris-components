import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from 'components/Layout/components/MenuItem';

import { items } from './utils';

const Items = () =>
  items.map(data => (
    <MenuItem key={data.id} id={`menu-bottom-${data.id}`} item={data} />
  ));

Items.propTypes = {
  items: PropTypes.array,
};

export default Items;
