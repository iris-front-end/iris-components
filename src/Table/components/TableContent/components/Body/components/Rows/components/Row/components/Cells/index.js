import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import Cell from 'components/Table/components/TableContent/components/Cell';
import LinkCell from 'components/Table/components/TableContent/components/LinkCell';

const Cells = ({ id, link, index, headersCell, row }) => {
  let count = 0;

  return map(row, (column, key) => {
    if (key !== 'id') {
      return (
        <Cell
          id={`${id}-td-${count}`}
          hide={typeof column !== 'object' ? headersCell[count++].hide : 'sm'} //if row is Actions, then hide only in small
          key={`${key}-${index}`}
        >
          <LinkCell
            id={`${id}-td-${count - 1}`}
            //if havent key, is action, so havent link
            link={typeof column !== 'object' ? link : ''}
          >
            {column}
          </LinkCell>
        </Cell>
      );
    } else {
      count++;
    }
  });
};

Cells.propTypes = {
  id: PropTypes.string,
  link: PropTypes.string,
  index: PropTypes.number,
  headersCell: PropTypes.array,
  row: PropTypes.object,
};

export default Cells;
