import styled from 'styled-components';

import { drawerWidth } from 'components/Layout/style';

import { SCROLLBAR_STR } from 'styles/scroolbar';

export const SideBarWrapper = styled.aside`
  display: flex;
  width: 258px;
  z-index: 0;
`;
export const MainMenu = styled.div`
  justify-content: space-between;
  height: 100%;
  background-color: ${props => props.theme.colors.primaryDark};
  width: ${drawerWidth}px;
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  z-index: 3;
  position: fixed;
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  left: 0;
  overflow-y: auto;

  ${SCROLLBAR_STR}
`;
