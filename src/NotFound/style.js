import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-family: ${props => props.theme.typography.primary};
  font-size: 16px;
  line-height: 24px;
  color: #333;
`;
