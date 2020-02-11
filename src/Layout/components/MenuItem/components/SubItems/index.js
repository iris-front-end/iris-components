import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, List } from '@material-ui/core';

import SubItemsList from './components/SubItemsList';

const SubItems = ({ id, item, open, match, location, ...rest }) => (
  <Collapse in={open === item.id} timeout="auto" unmountOnExit>
    {((match && location.pathname.includes(match.path)) || true) && (
      <List component="div" disablePadding>
        <SubItemsList
          id={id}
          item={item}
          match={match}
          location={location}
          {...rest}
        />
      </List>
    )}
  </Collapse>
);

SubItems.propTypes = {
  id: PropTypes.string,
  item: PropTypes.object,
  open: PropTypes.string,
  match: PropTypes.object,
  location: PropTypes.object,
};

export default SubItems;
