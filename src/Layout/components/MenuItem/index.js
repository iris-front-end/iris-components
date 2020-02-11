import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Item from './components/Item';
import SubItems from './components/SubItems';

const MenuItem = ({ id, item, open, handleClick, loading, ...rest }) => (
  <Route
    path={item.path}
    // eslint-disable-next-line react/no-children-prop
    children={({ match, location }) => (
      <>
        <Item id={id} open={open} item={item} handleClick={handleClick} />
        {item.sub_items && (
          <SubItems
            id={id}
            item={item}
            match={match}
            location={location}
            open={open}
            {...rest}
          />
        )}
      </>
    )}
  />
);

MenuItem.propTypes = {
  id: PropTypes.string,
  open: PropTypes.string,
  item: PropTypes.object,
  icon: PropTypes.object,
  loading: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default MenuItem;
