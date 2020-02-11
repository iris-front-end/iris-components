import styled from 'styled-components';
import { makeStyles } from '@material-ui/styles';
export const useStyles = makeStyles(theme => ({
  drawerHeader: {
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    backgroundColor: theme.colors.primaryDark,
  },
  menuButton: {
    padding: 0,
    color: 'white',
    '& svg': {
      stroke: 'none',
    },
    '&:hover': {
      backgroundColor: 'rgba(209, 209, 209, 0.08)',
    },
  },
}));
export const Header = styled.div`
  border-radius: 4px;
  display: flex;
  position: absolute;
  z-index: 1;
  right: 6px;
  align-items: center;
  justify-content: flex-end;

  && {
    min-height: 40px;
  }
`;
