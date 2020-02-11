import styled from 'styled-components';
import Popover from '@material-ui/core/Popover';

export const StyledPopover = styled(Popover).attrs(() => ({
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
}))`
  .MuiPaper-root {
    background-color: unset;
    box-shadow: unset;
    margin-left: 18px;
  }
  .github-picker {
    width: 248px !important;
    margin-top: 15px;
    border-radius: 6px;
    & > span {
      padding: 3px;
      & div {
        border-radius: 5px;
      }
    }
  }
`;
