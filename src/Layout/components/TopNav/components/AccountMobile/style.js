import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${props => props.theme.colors.blueGray};
  display: none;
  padding-left: 15px;

  @media ${props => props.theme.device.laptop} {
    display: flex;
  }
`;
