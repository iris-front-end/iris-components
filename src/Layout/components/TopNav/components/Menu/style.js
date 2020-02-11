import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  menu: {
    '& .MuiPopover-paper': {
      top: '60px !important',
      marginLeft: '10px',
    },
  },
  menuItem: {
    color: theme.colors.blueGray,
    minWidth: 170,

    '& svg, & i': {
      marginRight: 10,
    },
  },
}));
