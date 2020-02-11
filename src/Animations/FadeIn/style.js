import styled, { keyframes } from 'styled-components';

export const FadeInAnimation = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export const Fade = styled.div`
  animation: ${props => (props.keyframes ? props.keyframes : FadeInAnimation)}
    1s;
  display: flex;
  flex: 1;
  flex-direction: column;
  max-height: 100%;
`;
