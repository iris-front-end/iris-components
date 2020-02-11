import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Inputs/Buttons/Button';

import { Wrapper } from './style';

import i18n from 'helpers/i18n';

const PATH = 'common.buttons';

const CancelAndConfirm = props => (
  <Wrapper>
    <Button
      id={`${props.id}-button-cancel`}
      onClick={props.onCancel}
      to={props.urlCancel && props.urlCancel}
      rounded
      type="outlined"
    >
      {i18n.t(`${PATH}.cancel`)}
    </Button>
    <Button
      id={`${props.id}-button-confirm`}
      onClick={props.onConfirm}
      to={props.urlConfirm && props.urlConfirm}
      rounded
    >
      {i18n.t(`${PATH}.confirm`)}
    </Button>
  </Wrapper>
);

CancelAndConfirm.propTypes = {
  id: PropTypes.string,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  urlCancel: PropTypes.string,
  urlConfirm: PropTypes.string,
};

export default CancelAndConfirm;
