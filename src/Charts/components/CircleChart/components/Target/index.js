import React from 'react';
import PropTypes from 'prop-types';

import { StyledTarget } from './../../style';

const Radar = ({ id }) => (
  <StyledTarget id={id} width="180px" height="180px">
    <StyledTarget width="130px" height="130px">
      <StyledTarget width="80px" height="80px">
        <StyledTarget width="25px" height="25px" />
      </StyledTarget>
    </StyledTarget>
  </StyledTarget>
);

Radar.propTypes = {
  id: PropTypes.string,
};

export default Radar;
