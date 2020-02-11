import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';

import Cells from './components/Cells';

const Row = props => {
  const {
    id,
    isSelectable,
    selected,
    handleClick,
    headersCell,
    link,
    isItemSelected,
    row,
    index,
    labelId,
  } = props;

  return (
    <TableRow
      className={`${id}`}
      hover
      role="checkbox"
      aria-checked={isSelectable && isItemSelected}
      tabIndex={-1}
      selected={isSelectable && isItemSelected}
    >
      {isSelectable && (
        <TableCell id={`${id}-td-checkbox`} padding="checkbox">
          <Checkbox
            id={`${id}-checkbox`}
            checked={isItemSelected}
            onChange={() => handleClick(row.id, selected)}
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </TableCell>
      )}
      <Cells
        id={id}
        link={link}
        index={index}
        headersCell={headersCell}
        row={row}
      />
    </TableRow>
  );
};

Row.propTypes = {
  id: PropTypes.string,
  isSelectable: PropTypes.bool,
  headCells: PropTypes.array,
  selected: PropTypes.array,
  handleClick: PropTypes.func,
  headersCell: PropTypes.array,
  link: PropTypes.string,
  isItemSelected: PropTypes.bool,
  row: PropTypes.object,
  index: PropTypes.number,
  labelId: PropTypes.string,
};

export default Row;
