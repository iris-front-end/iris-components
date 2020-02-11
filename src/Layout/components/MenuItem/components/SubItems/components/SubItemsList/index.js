import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import i18n from 'helpers/i18n';

import { SubItemGroup, RectPlaceHolder, SubListItem, useStyles } from './style';

const SubItemsList = ({ id, item, match, location, ...rest }) => {
  const classes = useStyles();

  return item.sub_items.map((subItem, index) => (
    <Link id={`${id}-subitem-${index}`} key={index} to={subItem.path} {...rest}>
      <SubItemGroup
        key={index}
        button
        className={classes.listItem}
        active={match}
      >
        <RectPlaceHolder>
          <SubListItem
            id={`${id}-subitem-${index}-text`}
            className={clsx(
              classes.subItem,
              subItem.path === location.pathname && classes.exactPath
            )}
          >
            {i18n.t(subItem.label)}
          </SubListItem>
        </RectPlaceHolder>
      </SubItemGroup>
    </Link>
  ));
};

export default SubItemsList;
