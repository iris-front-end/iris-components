import React from 'react';
import PropTypes from 'prop-types';

import Heading from 'components/Typography/Heading';

import i18n from 'helpers/i18n';

import { Wrapper, Counter } from './style';

const TitleWithSpan = ({ id, text, count }) => (
  <Wrapper>
    <Heading id={id} type="h1">
      {text}
    </Heading>

    <Counter id={id}>
      {count ? i18n.t('components.counter.selected', [count]) : ''}
    </Counter>
  </Wrapper>
);

TitleWithSpan.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  count: PropTypes.number,
};

export default TitleWithSpan;
