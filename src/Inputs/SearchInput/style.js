import styled from 'styled-components';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  searchIcon: {
    width: theme.spacing(7),
  },
}));

export const SearchWrapper = styled.div`
  position: relative;
  border-radius: 6px;
  margin: 16px;
  max-width: 500px;
  width: calc(100% - 32px);
  background-color: ${props =>
    props.styleType === 'lightShadow' || props.styleType === 'light'
      ? props.theme.colors.white
      : '#f7f7f9'};
  box-shadow: ${props =>
    props.styleType === 'lightShadow' &&
    '0 1px 14px 0 rgba(231, 229, 229, 0.5)'};

  &:hover {
    background-color: ${props =>
      props.styleType === 'lightShadow' || props.styleType === 'light'
        ? props.theme.colors.white
        : '#f5f4f7'};
  }
`;

export const IconWrapper = styled.div`
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
