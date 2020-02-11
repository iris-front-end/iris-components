import styled from 'styled-components';

import IconComponent from 'components/Icon';

export const IconWrapper = styled.span`
  align-items: center;
  background: transparent;
  display: flex;
  margin-right: 10px;
`;

export const Icon = styled(IconComponent)`
  g {
    stroke: #fff;
  }
`;
