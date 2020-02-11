import styled from 'styled-components';

export const Counter = styled.span.attrs(() => ({
  id: `counter-${props => props.id}`,
}))``;

export const Wrapper = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;

  ${Counter} {
    margin-left: 10px;
    font-size: 12px;

    ${props => {
      return `
        color: ${props.theme.colors.primaryDark};
        font-family: ${props.theme.typography.primary};
      `;
    }}
  }
`;
