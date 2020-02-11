import React from 'react';
import { Link } from 'react-router-dom';

import ListItems from './../ListItems';

import logo from 'assets/img/logoIRIS_white.png';

import { Logo, Wrapper } from './style';

const MenuList = () => (
  <Wrapper>
    <Link id="link-logo" to="/">
      <Logo src={logo} />
    </Link>
    <ListItems />
  </Wrapper>
);

export default MenuList;
