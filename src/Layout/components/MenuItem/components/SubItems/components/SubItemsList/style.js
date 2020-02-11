import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';

import PlaceHolder from 'components/Placeholder';
export const useStyles = makeStyles(theme => ({
  subItem: {
    fontFamily: theme.fonts.light,
  },
  exactPath: {
    fontWeight: 600,
  },
  listItem: {
    position: 'relative',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    color: theme.colors.white,
    '& a': {
      color: theme.colors.white,
    },
  },
}));

export const SubItemGroup = styled(ListItem)`
  font-size: 14px;
  background-color: #38414e !important;

  a:last-child li {
    padding-bottom: 10px;
  }
`;

export const SubListItem = styled.p`
  padding-left: 27px;
  font-size: 16px;
  margin: 0;
  text-transform: capitalize;
`;
export const RectPlaceHolder = styled(PlaceHolder).attrs({
  type: 'rect',
  width: 100,
  height: 10,
})``;
