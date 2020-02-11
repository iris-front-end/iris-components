import styled from 'styled-components';

export const paperProps = {
  style: {
    overflowY: 'visible',
  },
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  align-items: unset;
`;

export const ContentWrapper = styled.div`
  padding-top: 20px;
  overflow-y: visible !important;
  z-index: 100;
`;
