import styled from 'styled-components';

import fontSizes from 'styles/font-sizes';

export default styled.p`
  color: ${props =>
    props.white ? props.theme.colors.white : props.theme.colors.blueGray};
  font-family: ${props =>
    props.bold
      ? props.theme.typography.bold
      : props.theme.typography.secondary};
  font-size: ${props => (props.like ? fontSizes[props.like] : '16px')};
  line-height: calc(
    ${props => (props.like ? fontSizes[props.like] : '16px')} * 1.5
  );
  margin: 0;
  text-align: ${props => props.center && 'center'};
`;
