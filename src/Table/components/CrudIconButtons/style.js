import styled from 'styled-components';
import IconButton from 'components/Inputs/Buttons/IconButton';

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  & > *:not(:last-child) {
    margin-right: 10px;
  }
  & > * {
    cursor: pointer;
  }
`;

export const WhiteIconButton = styled(IconButton).attrs(props => ({
  stroke: props.theme.colors.white,
}))``;
