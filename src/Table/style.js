import styled from 'styled-components';
import { size } from 'lodash';
import MaterialTablePagination from '@material-ui/core/TablePagination';

import OriginalCard from 'components/Card';

import { SCROLLBAR_STR } from 'styles/scroolbar';

export const Card = styled(OriginalCard)`
  && {
    height: auto;
    max-height: 100%;
    padding: 0;
  }
`;

export const TableWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden !important;

  .makeStyles-root-275 {
    box-shadow: none;
    margin: none;
  }

  .MuiTypography-caption {
    font-size: 12px;
  }

  .MuiTableRow-root {
    &:last-child {
      .MuiTableCell-body {
        ${props => props.hasPagination && 'border: none;'}
      }
    }
  }

  .MuiTableBody-root {
    overflow: auto;

    ${SCROLLBAR_STR}
  }

  .MuiTableCell-root {
    align-items: center;

    &:last-child {
      padding-right: 40px;
    }
  }

  .MuiTableCell-body {
    color: ${props => props.theme.colors.blueGray};
    font-weight: normal;
    font-family: ${props => props.theme.typography.secondary};
    &:last-child {
      & > * {
        justify-content: center;
      }
    }
    &:not(.MuiTableCell-paddingCheckbox) {
      ${props =>
        size(props.link)
          ? `
            padding: 0;
              a {
                color: inherit;
                padding: 11.2px;
                display: flex;
              }
            `
          : 'padding: 11.2px'};
    }
  }

  .MuiTableCell-head {
    color: ${props => props.theme.colors.pinkDark};
    font-size: 16px;

    & .MuiTableSortLabel-root,
    .MuiTableSortLabel-root * {
      color: inherit !important;
    }
    &:not(.MuiTableCell-paddingCheckbox) {
      padding: 11.2px;
    }
  }

  .MuiToolbar-root {
    padding: 0 5px;
  }

  .MuiTablePagination-selectRoot {
    margin-right: 20px;
  }

  .MuiTablePagination-toolbar {
    flex-wrap: wrap;
    height: auto;
    min-height: 45px;
    justify-content: flex-end;

    @media ${props => props.theme.device.mobileL} {
      padding: 16px 16px 0;
      justify-content: center;
    }
  }

  .MuiTablePagination-actions {
    @media ${props => props.theme.device.mobileL} {
      display: flex;
      justify-content: space-between;
      margin: 0;
      width: 100%;
    }
  }
`;

export const TablePagination = styled(MaterialTablePagination).attrs(() => ({
  component: 'div',
  rowsPerPageOptions: [5, 15, 25],
  backIconButtonProps: {
    'aria-label': 'previous page',
  },
  nextIconButtonProps: {
    'aria-label': 'next page',
  },
}))``;
