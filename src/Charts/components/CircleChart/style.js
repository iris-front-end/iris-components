import styled from 'styled-components';

export const StyledTarget = styled.div`
  display: flex;
  width: ${props => props.width};
  height: ${props => props.height};
  z-index: ${props => props.zIndex};
  border: 1px solid rgba(0, 0, 0, 0.12);
  margin: auto;
  border-radius: 50%;
`;

export const Wrapper = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const StyledCircle = styled.div`
  background-image: radial-gradient(circle at 50% 56%, #bb66d1, #8344a5);
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  position: absolute;
  border-radius: 50%;
  transition: all 1.5s cubic-bezier(0.67, -0.85, 0.51, 2);
`;
