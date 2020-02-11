import React from 'react';
import { size } from 'lodash';
import PropTypes from 'prop-types';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import i18n from 'helpers/i18n';

const SortableLabel = ({
  thId,
  orderBy,
  headerKey,
  label,
  order,
  classes,
  createSortHandler,
  isSortable,
  columnIsentSortable,
}) =>
  !columnIsentSortable && isSortable && size(label) ? (
    <TableSortLabel
      id={thId}
      active={orderBy === headerKey}
      direction={order}
      onClick={createSortHandler(headerKey)}
    >
      {i18n.t(label) || label}
      {orderBy === headerKey ? (
        <span className={classes.visuallyHidden}>
          {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
        </span>
      ) : null}
    </TableSortLabel>
  ) : (
    i18n.t(label) || label
  );

SortableLabel.propTypes = {
  thId: PropTypes.string,
  orderBy: PropTypes.number,
  headerKey: PropTypes.number,
  label: PropTypes.string,
  order: PropTypes.string,
  classes: PropTypes.object,
  createSortHandler: PropTypes.func,
  isSortable: PropTypes.bool,
  columnIsentSortable: PropTypes.bool,
};

export default SortableLabel;
