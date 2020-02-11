import styled, { css } from 'styled-components';

import fontSizes from 'styles/font-sizes';

const headings = {
  h1: css`
    color: ${props => props.theme.colors.pinkDark};
    font-family: ${props => props.theme.typography.primary};
    font-size: ${fontSizes.h1};
    margin: 10px 0;
  `,

  h2: css`
    color: ${props => props.theme.colors.blueGray};
    font-family: ${props =>
      props.bold || props.modal
        ? props.theme.typography.bold
        : props.theme.typography.secondary};
    font-size: ${props => (props.modal ? fontSizes.h2Modal : fontSizes.h2)};
  `,

  h3: css`
    color: ${props =>
      props.white ? props.theme.colors.white : props.theme.colors.blueGray};
    font-family: ${props => props.theme.typography.bold};
    font-size: ${fontSizes.h3};
  `,
};

export default styled.h1`
  margin: 0;
  text-align: ${props => props.center && 'center'};
  font-weight: 400;

  ${props => headings[props.type]}
`;
