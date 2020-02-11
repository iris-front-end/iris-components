import React from 'react';
import PropTypes from 'prop-types';

import Head from './components/Head';
import Body from './components/Body';

const TableContent = props => {
  const {
    id,
    handleSelectAllClick,
    handleClick,
    countOnSelectRow,
    handleRequestSort,
    tableData,
    orderBy,
    order,
    setOrder,
    setOrderBy,
    setSelected,
  } = props;
  return (
    <>
      <Head
        id={id}
        onSelectAllClick={({ target: { checked } }) => {
          const selecteds = handleSelectAllClick(
            checked,
            tableData,
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
        {...props}
      />
      <Body
        id={id}
        handleClick={(name, selected) => {
          const seleteds = handleClick(name, selected, setSelected);
          countOnSelectRow(seleteds.length);
        }}
        {...props}
      />
    </>
  );
};

TableContent.propTypes = {
  id: PropTypes.string,
  handleSelectAllClick: PropTypes.func,
  handleClick: PropTypes.func,
  countOnSelectRow: PropTypes.func,
  handleRequestSort: PropTypes.func,
  tableData: PropTypes.array,
  orderBy: PropTypes.number,
  order: PropTypes.string,
  setOrder: PropTypes.func,
  setOrderBy: PropTypes.func,
  setSelected: PropTypes.func,
};

export default TableContent;
