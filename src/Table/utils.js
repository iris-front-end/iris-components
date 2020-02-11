import { makeStyles, lighten } from '@material-ui/core/styles';
import { forEach } from 'lodash';

import { SCROLLBAR_OBJ } from 'styles/scroolbar';

const desc = (a, b, orderBy) =>
  b[Object.keys(b)[orderBy]] < a[Object.keys(a)[orderBy]]
    ? -1
    : b[Object.keys(b)[orderBy]] > a[Object.keys(a)[orderBy]]
    ? 1
    : 0;

export const tableUtils = {
  toolbarStyles: makeStyles(theme => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
      fontSize: '14px',
      height: '50px',
      minHeight: 'unset',
      borderRadius: '2px',
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '0 0 auto',
      fontSize: '14px',
    },
  })),
  generalStyles: makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    tableWrapper: {
      overflowX: 'auto',
    },
    card: {
      flexDirection: 'column',
    },
    paper: {
      borderRadius: '4px 4px 0 0',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      overflow: 'auto',
      boxShadow: 'none',
      ...SCROLLBAR_OBJ,
    },
    footer: {
      backgroundColor: 'white',
      borderRadius: '0 0 4px 4px',
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
    cell: {
      padding: '14px 16px',
    },
  })),
  isSelected: (name, arr) => arr.indexOf(name) !== -1,
  handleRequestSort: (
    event,
    property,
    { orderBy, order },
    setOrder,
    setOrderBy
  ) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  },
  handleSelectAllClick: (checked, rows, setSelected) => {
    if (checked) {
      const newSelecteds = rows.map(n => n.id);
      setSelected(newSelecteds);
      return newSelecteds;
    }
    setSelected([]);
    return [];
  },
  handleClick: (name, selected, setSelected) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);

    return newSelected;
  },
  handleChangePage: (event, newPage, setPage) => {
    setPage(newPage);
  },

  handleChangeRowsPerPage: (event, setRowsPerPage, setPage) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  },
  createSortHandler: callback => property => event => {
    callback(event, property);
  },
  stableSort: (array, cmp) => {
    return array
      .map((el, index) => [el, index])
      .sort((a, b) => {
        const order = cmp(a[0], b[0]);
        return order !== 0 ? order : a[1] - b[1];
      })
      .map(el => el[0]);
  },
  getSorting: (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => desc(a, b, orderBy)
      : (a, b) => -desc(a, b, orderBy);
  },
  filterData: (data, lowerValue) =>
    data.filter(elem => {
      let found = false;

      forEach(elem, value => {
        if (
          typeof value !== 'object' &&
          value
            .toString()
            .toLocaleLowerCase()
            .includes(lowerValue)
        ) {
          found = true;
        }
      });

      return found;
    }),
};
