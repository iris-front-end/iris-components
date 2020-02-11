import styled from 'styled-components';
import { List } from '@material-ui/core';
export const MuiList = styled(List).attrs(() => ({
  component: 'nav',
}))`
  width: 100%;
`;
