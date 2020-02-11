import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';

import { getBreakpoint } from 'helpers/breakpoints';

const Cell = styled(TableCell)`
  ${props => props.hide && getBreakpoint(props.hide, props)}
`;

export default Cell;
