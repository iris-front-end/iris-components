import styled from 'styled-components';

import { SCROLLBAR_STR } from 'styles/scroolbar';

export const Header = styled.header`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 0 10px;
  padding: 4px;

  > *:first-child {
    flex-grow: 99999;
  }

  > * {
    flex-grow: 1;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 4px;
  height: 100%;

  & > *:last-child {
    ${SCROLLBAR_STR}
  }
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-height: 100%;
`;
