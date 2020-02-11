import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

import { drawerWidth } from './../../style';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: theme.colors.white,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: '60px',
    boxShadow: 'rgba(33, 33, 33, 0.08) 0px 1px 5px 1px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: open => (open ? 'flex-end' : 'space-between'),
    minHeight: '60px',
  },
  appBarShift: {
    width: '100%',
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.colors.blueGray,
    '& svg': {
      stroke: 'none',
    },
  },
  hide: {
    display: 'none',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export const SettingsWrapper = styled.div`
  align-items: center;
  border-radius: 6px;
  display: flex;
  height: 50px;
  justify-content: flex-end;
  margin: 4px;
  padding: 4px 0 4px 10px;
  width: 340px;
`;
export const TopNavWrapper = styled.div`
  .MuiToolbar-root {
    @media ${props => props.theme.device.laptop} {
      padding: 0 5px;
    }
  }

  .MuiIconButton-root {
    @media ${props => props.theme.device.laptop} {
      margin: 0;
    }
  }

  .input-select__icon {
    @media ${props => props.theme.device.mobileM} {
      display: none;
    }
  }
`;
