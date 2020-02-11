import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

import Cells from './components/Cells';

const Head = props => {
  const { id, onSelectAllClick, numSelected, rowCount, isSelectable } = props;

  return (
    <TableHead>
      <TableRow>
        {isSelectable && (
          <TableCell id={`${id}-th-checkbox`} padding="checkbox">
            <Checkbox
              id={`${id}-checkbox`}
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell>
        )}
        <Cells {...props} />
      </TableRow>
    </TableHead>
  );
};

Head.propTypes = {
  id: PropTypes.string,
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.number.isRequired,
  rowCount: PropTypes.number.isRequired,
  isSelectable: PropTypes.bool,
  headCells: PropTypes.array,
  headersCell: PropTypes.array,
};

export default Head;
