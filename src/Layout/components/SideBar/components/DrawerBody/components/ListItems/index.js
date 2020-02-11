import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { items } from 'components/Layout/components/SideBar/utils';
import MenuItem from 'components/Layout/components/MenuItem';

import { MuiList } from './style';

const ListItems = () => {
  const [open, setOpen] = useState('audience');

  return items.map((item, index) => (
    <MuiList key={index}>
      <MenuItem
        id={`menu-list-item-${index}`}
        loading
        item={item}
        open={open}
        handleClick={id => setOpen(id === open ? '' : id)}
      />
    </MuiList>
  ));
};

ListItems.propTypes = {
  onClick: PropTypes.func,
};

export default ListItems;
