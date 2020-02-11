import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  card: props => ({
    display: 'flex',
    margin: props.margin,
    padding: '15px',
    boxSizing: 'border-box',
    borderRadius: '6px',
    boxShadow: props.noShadow ? 'none' : '0 1px 5px 1px rgba(33, 33, 33, 0.08)',
    width: props.width,
    height: props.height,
    minHeight: props.minHeight,
    background: props.bgImage
      ? `url(${props.bgImage}) center no-repeat`
      : 'white',
    backgroundSize: 'cover!important',
    backgroundBlendMode: 'multiply',
    fontFamily: theme.typography.primary,
    flexDirection: props.direction,
  }),
}));
