import { makeStyles } from '@material-ui/core/styles';

import { drawerWidth } from './../../style';
export const useStyles = makeStyles({
  drawer: {
    width: `${drawerWidth - 5}px`,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    overflow: 'hidden',
  },
});
