import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  button: {
    padding: 0,
  },
  avatar: {
    margin: 10,
    color: theme.colors.white,
    backgroundColor: theme.colors.purpleDark,
  },
}));

export const Wrapper = styled.div`
  color: ${props => props.theme.colors.blueGray};
  display: flex;
  padding-left: 15px;

  @media ${props => props.theme.device.laptop} {
    display: none;
  }
`;
