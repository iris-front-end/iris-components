import clsx from 'clsx';
import { useStyles } from './style';

const classes = useStyles();
export const subItemClass = (subItem, location) =>
  clsx(
    classes.subItem,
    subItem.path === location.pathname && classes.exactPath
  );
