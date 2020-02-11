import React from 'react';
import PropTypes from 'prop-types';

import CustomHeading from './components/CustomHeading';
import FadeIn from 'components/Animations/FadeIn';

import { Header, Content, ContentWrapper } from './style';

const MainBody = ({ id, title, headerContent, children, className }) => (
  <ContentWrapper className={className}>
    <FadeIn>
      <Header>
        <CustomHeading id={id} title={title} />
        {headerContent}
      </Header>
      <Content>{children}</Content>
    </FadeIn>
  </ContentWrapper>
);

MainBody.propTypes = {
  id: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  headerContent: PropTypes.element,
  children: PropTypes.element,
  className: PropTypes.string,
};

export default MainBody;
