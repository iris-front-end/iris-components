import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';

export const PlaceHolderWrap = styled(Skeleton)`
  margin-right: 10px;
  background-color: ${props =>
    props.bgWhite === 'true'
      ? 'rgba(191, 191, 191, 0.5)'
      : 'rgba(251, 251, 251, 0.5)'} !important;
  width: ${props => (props.variant === 'rect' ? props.width : 'auto')};
`;
