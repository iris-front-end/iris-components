import React from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import i18n from 'helpers/i18n';

import {
  ListItemStyled,
  useStyles,
  Icon,
  CirclePlaceHolder,
  RectPlaceHolder,
} from './style';

const Item = ({ id, open, handleClick, item }) => {
  const classes = useStyles();

  return (
    <ListItemStyled
      id={id}
      button
      active={open === item.id ? 1 : 0}
      onClick={() => {
        handleClick && handleClick(item.id);
      }}
      to={item.path}
      component={item.path && Link}
      className={classes.listItem}
    >
      <CirclePlaceHolder>
        <Icon type={item.icon} />
      </CirclePlaceHolder>
      <RectPlaceHolder>
        <ListItemText
          id={`${id}-text`}
          primary={i18n.t(item.label)}
          className={classes.listItemText}
        />
      </RectPlaceHolder>
      {item.sub_items && (open === item.id ? <ExpandLess /> : <ExpandMore />)}
    </ListItemStyled>
  );
};

Item.propTypes = {
  id: PropTypes.string,
  open: PropTypes.string,
  handleClick: PropTypes.func,
  item: PropTypes.object,
};

export default Item;
