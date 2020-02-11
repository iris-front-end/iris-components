import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import SortableLabel from '../SortableLabel';
import Cell from '../../../Cell';

import { tableUtils } from 'components/Table/utils';

const Cells = props => {
  const { id, onRequestSort, orderBy, order, headersCell } = props;

  return map(
    headersCell,
    (elem, key) =>
      elem.id !== 'id' && (
        <Cell
          id={`${id}-th-${key}`}
          align={'left'}
          sortDirection={orderBy === elem.id ? order : false}
          key={elem.id}
          hide={headersCell[key + 1] ? headersCell[key + 1].hide : 'sm'}
        >
          <SortableLabel
            thId={`${id}-th-${key}-label`}
            {...props}
            {...elem}
            createSortHandler={tableUtils.createSortHandler(onRequestSort)}
            headerKey={key}
          />
        </Cell>
      )
  );
};

Cells.propTypes = {
  id: PropTypes.string,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.number.isRequired,
  headersCell: PropTypes.array,
};

export default Cells;
