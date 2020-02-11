import styled from 'styled-components';

export const RowWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  width: 100%;

  & > * {
    flex: 1;
  }

  & > *:not(:last-child) {
    margin-right: 15px;
    @media ${props => props.theme.device.tablet} {
      margin-right: 0;
    }
  }
`;
