import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

import Label from './../Label';

import { size } from 'styles/media-query';

export const SelectWrapper = styled.div(props => ({
  display: 'flex',
  flexDirection: 'column',
  '& .react-select__control': {
    borderRadius: '6px',
    borderWidth: 1,
    minHeight: 42,
    width: props.width,
  },
  '& .react-select__control--is-focused': {
    borderColor: `${
      props.light ? props.theme.colors.blueGray : props.theme.colors.purple
    }!important`,
    borderWidth: '1px',
    boxShadow: 'none',
    color: props.theme.colors.white,
  },
  '& .react-select__menu': {
    backgroundColor: props.theme.colors.white,
    borderRadius: '6px!important',
  },
  '& .react-select__menu-list': {
    padding: 0,
    '.react-select__option:first-child': {
      borderRadius: !props.grouped && '6px 6px 0 0',
    },
    '.react-select__option:last-child': {
      borderRadius: !props.grouped && '0 0 6px 6px',
    },
  },
  '& .react-select__option': {
    color: props.theme.colors.blueGray,
    display: 'flex',
    alignItems: 'center',
  },
  '& .react-select__option--is-selected': {
    color: props.theme.colors.white,
  },
  '& .react-select__indicator-separator': {
    display: 'none',
  },
  '& .input-select__single-value': {
    display: 'flex',
    color: `${props.theme.colors.blueGray}`,
    alignItems: 'center',
  },
}));

export const IconWrapper = styled(Avatar)`
  margin-right: 10px !important;
  background-color: ${props => props.theme.colors.pink}!important;
  width: 28px !important;
  height: 28px !important;
  font-size: 16px;
  align-items: baseline;
`;

export const AvatarWrapper = styled(Avatar)`
  margin-right: 10px !important;
  width: 25px !important;
  height: 25px !important;
  align-items: baseline;
  background-color: transparent;
  padding: 0px !important;
`;

export const useStyles = makeStyles(theme => {
  const tabletSize = Number(size.tablet.replace('px', ''));

  return {
    formControl: {
      minWidth: 200,
      flex: 1,
      padding: props => props.noPadding && '8px',
      fontFamily: theme.fonts.light,
      [theme.breakpoints.down(tabletSize)]: {
        minWidth: 180,
      },
    },
  };
});
