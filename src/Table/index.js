import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from '@material-ui/core/Table';
import { Paper } from '@material-ui/core';

import TableToolbar from './components/TableToolbar';
import TableContent from './components/TableContent';
import SearchInput from 'components/Inputs/SearchInput';

import { tableUtils } from './utils';
import i18n from 'helpers/i18n';

import { TableWrapper, TablePagination, Card } from './style';

const Table = props => {
  const {
    id,
    hasPagination,
    hasSearch,
    data,
    countOnSelectRow,
    hasToolbar,
    link,
    headersCell,
  } = props;

  const {
    handleSelectAllClick,
    handleChangePage,
    handleChangeRowsPerPage,
    handleClick,
    handleRequestSort,
    generalStyles,
    filterData,
  } = tableUtils;

  const classes = generalStyles(props);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState(1);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [tableData, setTableData] = useState(data);

  const handleOnChangeSearch = value => {
    const lowerValue = value.toLocaleLowerCase();

    if (!value) {
      setTableData(data);
    }

    setTableData(filterData(data, lowerValue));
  };

  return (
    <TableWrapper link={link}>
      <Card margin={0} noShadow>
        {hasSearch && (
          <SearchInput
            id={`input-search-${id}`}
            onChange={handleOnChangeSearch}
          />
        )}
        <Paper className={classes.paper}>
          <TableToolbar
            id={`table-toolbar-${id}`}
            numSelected={selected.length}
            isHide={!(selected.length && hasToolbar)}
          />

          <MaterialTable id={id} aria-labelledby="tableTitle">
            <TableContent
              id={id}
              tableData={tableData}
              headersCell={headersCell}
              selected={selected}
              handleClick={(name, selected) => {
                const seleteds = handleClick(name, selected, setSelected);
                countOnSelectRow(seleteds.length);
              }}
              link={link}
              order={order}
              orderBy={orderBy}
              page={page}
              rowsPerPage={rowsPerPage}
              onSelectAllClick={({ target: { checked } }) => {
                const selecteds = handleSelectAllClick(
                  checked,
                  data,
                  setSelected
                );
                countOnSelectRow(selecteds.length);
              }}
              onRequestSort={(event, property) =>
                handleRequestSort(
                  event,
                  property,
                  { orderBy, order },
                  setOrder,
                  setOrderBy
                )
              }
              rowCount={tableData.length}
              classes={classes}
              numSelected={selected.length}
              {...props}
            />
          </MaterialTable>
        </Paper>
        {hasPagination && (
          <TablePagination
            id={`pagination-${id}`}
            className={classes.footer}
            rowsPerPageOptions={[5, 15, 25]}
            component="div"
            count={tableData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            labelRowsPerPage={i18n.t('components.table.rowsPerPage')}
            onChangePage={(event, newPage) =>
              handleChangePage(event, newPage, setPage)
            }
            onChangeRowsPerPage={event =>
              handleChangeRowsPerPage(event, setRowsPerPage, setPage)
            }
          />
        )}
      </Card>
    </TableWrapper>
  );
};

Table.propTypes = {
  id: PropTypes.string,
  isSelectable: PropTypes.bool,
  hasPagination: PropTypes.bool,
  onChangePage: PropTypes.func,
  onSeletItem: PropTypes.func,
  data: PropTypes.array,
  countOnSelectRow: PropTypes.func,
  hasToolbar: PropTypes.bool,
  link: PropTypes.string,
  hasSearch: PropTypes.bool,
  headersCell: PropTypes.array,
};

export default Table;
