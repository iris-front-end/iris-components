import React from 'react';

import MenuList from './components/MenuList';
import MenuBottom from './components/MenuBottom';

import { SideBarWrapper, MainMenu } from './style';

const DrawerBody = () => (
  <SideBarWrapper>
    <MainMenu>
      <MenuList />
      <MenuBottom />
    </MainMenu>
  </SideBarWrapper>
);

export default DrawerBody;
