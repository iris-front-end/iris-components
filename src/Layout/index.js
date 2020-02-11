import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import SideBar from './components/SideBar';
import TopNav from './components/TopNav';

import i18n from 'helpers/i18n';
import useToggle from 'helpers/hooks/useToggle';

import { size } from 'styles/media-query';
import { getNumberOfMediaQuery } from './utils';

import {
  ContainerWrapper,
  MainSection,
  Main,
  ContainerStyle,
  useStyles,
  HiddenSideBar,
} from './style';

const Layout = ({ children, scrollable }) => {
  const classes = useStyles();
  const mediaLaptop = getNumberOfMediaQuery(size.laptop);
  const isMobile = window.innerWidth < mediaLaptop;

  const [openSideBar, setOpen] = useToggle(!isMobile);
  const [language, setLanguage] = useState(i18n.language);
  const [Container, setContainer] = useState();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChangeLanguage = language => {
    i18n.setLanguage(language);
    setLanguage(language);
  };

  // Solução de contorno até que seja aplicado um gerenciador de estado
  useEffect(() => {
    setContainer(styled.section`
      ${ContainerStyle}
    `);
  }, [language]);

  return (
    <ContainerWrapper>
      <MainSection>
        <HiddenSideBar />
        <SideBar open={openSideBar} handleDrawerClose={handleDrawerClose} />
        <Main
          scrollable={scrollable}
          className={clsx(classes.content, {
            [classes.contentShift]: openSideBar && !isMobile,
          })}
        >
          <TopNav
            open={openSideBar}
            handleDrawerOpen={handleDrawerOpen}
            handleChangeLanguage={handleChangeLanguage}
          />

          {Container && <Container>{children}</Container>}
        </Main>
      </MainSection>
    </ContainerWrapper>
  );
};

const StyledLayout = withRouter(Layout);
const withLayout = component => (
  <StyledLayout {...component.props}>{component}</StyledLayout>
);

Layout.defaultProps = {
  scrollable: true,
  noPadding: false,
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  scrollable: PropTypes.bool,
};

export default StyledLayout;
export { withLayout };
