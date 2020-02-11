import React from 'react';
import PropTypes from 'prop-types';

import Row from './components/Row';

import { tableUtils } from 'components/Table/utils';

const Rows = props => {
  const { id, tableData, selected, order, orderBy, page, rowsPerPage } = props;

  const { isSelected, stableSort, getSorting } = tableUtils;

  return stableSort(tableData, getSorting(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row, index) => {
      const isItemSelected = isSelected(row.id, selected);
      const labelId = `${id}-row-${index}`;

      return (
        <Row
          {...props}
          id={labelId}
          key={row.id}
          isItemSelected={isItemSelected}
          row={row}
          index={index}
          labelId={labelId}
        />
      );
    });
};

Rows.propTypes = {
  id: PropTypes.string,
  isSelectable: PropTypes.bool,
  tableData: PropTypes.array,
  headCells: PropTypes.array,
  selected: PropTypes.array,
  handleClick: PropTypes.func,
  order: PropTypes.string,
  orderBy: PropTypes.number,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  headersCell: PropTypes.array,
  link: PropTypes.string,
};

export default Rows;
