import styled from 'styled-components';
import MaterialFormControlLabel from '@material-ui/core/FormControlLabel';

import { LabelStyle } from 'components/Inputs/Label/style';

export const FormControlLabel = styled(MaterialFormControlLabel)`
  .MuiFormControlLabel-label {
    ${LabelStyle}
    padding-bottom: 0;
  }
`;
