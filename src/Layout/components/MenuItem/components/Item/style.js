import styled from 'styled-components';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

import PlaceHolder from 'components/Placeholder';
import IconComponent from 'components/Icon';
export const useStyles = makeStyles(theme => ({
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
export const ListItemStyled = styled(ListItem)`
  background-color: ${props =>
    props.active ? '#38414e!important' : 'transparent'};
`;
export const Icon = styled(IconComponent)`
  font-size: 18px !important;
  margin-right: 10px;
`;

export const CirclePlaceHolder = styled(PlaceHolder).attrs({
  type: 'circle',
  width: 20,
  height: 20,
})``;

export const RectPlaceHolder = styled(PlaceHolder).attrs({
  type: 'rect',
  width: 100,
  height: 10,
})``;
