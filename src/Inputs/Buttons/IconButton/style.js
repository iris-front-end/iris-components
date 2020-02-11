import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  icon: {
    stroke: props =>
      !props.stroke
        ? props.secondary
          ? theme.colors.white
          : theme.colors.black
        : props.stroke,
    fill: props => props.fill,
    width: '18px',
    height: '18px',
  },
  iconButton: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    display: 'flex',
    height: '25px',
    justifyContent: 'center',
    padding: '0',
    margin: '0 0 5px',
    width: '25px',

    '&:last-child': {
      margin: '0',
    },

    '&:hover': {
      background: 'transparent',
    },
  },
  placeholder: {
    margin: '0 0 5px',
  },
}));
