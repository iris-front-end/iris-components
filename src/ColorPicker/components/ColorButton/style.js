import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: props => props.color,
    width: '30px',
    height: '30px',
    borderRadius: '8px',
    boxShadow: '0 1px 14px 0 rgba(231, 229, 229, 0.5)',
    minWidth: 'unset',
    '&:hover': {
      backgroundColor: props => props.color || theme.colors.black,
      filter: 'grayscale(0.5)',
    },
    marginBottom: '5px',
  },
}));
