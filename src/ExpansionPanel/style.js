import styled from 'styled-components';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { makeStyles } from '@material-ui/styles';

import { SCROLLBAR_STR } from 'styles/scroolbar';

export const useStyles = makeStyles({
  panel: {
    minWidth: 500,
  },
});

export const ExpansionWrapper = styled.div`
  max-height: 70vh;
  overflow-y: auto;
  padding: 2px;

  ${SCROLLBAR_STR}
`;

export const ExpansionPanelSummary = styled(MuiExpansionPanelSummary)`
  .MuiExpansionPanelSummary-content {
    margin: 6px 0;
  }
`;
