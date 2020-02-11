import styled from 'styled-components';
import { makeStyles } from '@material-ui/styles';

import Heading from 'components/Typography/Heading/style';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  hr {
    width: 100%;
  }

  ${Heading} {
    margin: ${props => (props.hasIcon ? '45px 0 30px' : '25px 0')};
  }
`;
export const useStyles = makeStyles({
  icon: {
    fontSize: 70,
    marginTop: '40px',
  },
});
