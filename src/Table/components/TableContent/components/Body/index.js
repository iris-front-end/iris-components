import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';

import Rows from './components/Rows';

const Body = props => (
  <TableBody>
    <Rows {...props} />
  </TableBody>
);

Body.propTypes = {
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

export default Body;
