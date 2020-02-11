import styled, { css } from 'styled-components';
import { makeStyles } from '@material-ui/core';

import { SCROLLBAR_STR } from 'styles/scroolbar';

import { Content } from './components/MainBody/style';

export const drawerWidth = 195;

export const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    paddingTop: '60px',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: 500,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: 500,
    }),
    marginLeft: 0,
  },
}));

export const ContainerWrapper = styled.div`
  margin: 0;
  min-height: 100vh;
  height: 100%;
  background: #fbfbfb;
  display: flex;
  flex-direction: column;
`;

export const MainSection = styled.section`
  display: flex;
  flex: 1;
  overflow-y: auto;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  z-index: 2;
  background-color: ${props => props.theme.colors.gray};

  @media ${props => props.theme.device.mobileL} {
    padding-bottom: 32px;
  }

  ${SCROLLBAR_STR}

  ${Content} {
    overflow: ${props => (props.scrollable ? 'unset' : 'auto')};
  }
`;

export const ContainerStyle = css`
  padding: ${props => !props.noPadding && '24px 32px 0'};
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: ${props => (props.scrollable ? '100%' : 'calc(100vh - 100px)')};

  @media ${props => props.theme.device.mobileL} {
    max-height: none;
  }
  ${SCROLLBAR_STR}
`;

export const HiddenSideBar = styled.div`
  width: 5px;
  background-color: ${props => props.theme.colors.blueGray};
  z-index: 3;
`;
