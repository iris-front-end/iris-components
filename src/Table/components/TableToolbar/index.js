import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { tableUtils } from 'components/Table/utils';

const TableToolbar = ({ id, numSelected, isHide }) => {
  const { toolbarStyles } = tableUtils;
  const classes = toolbarStyles();

  return !isHide ? (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        <Typography id={id} color="inherit" variant="subtitle1">
          {numSelected} selected
        </Typography>
      </div>
    </Toolbar>
  ) : (
    ''
  );
};

TableToolbar.propTypes = {
  id: PropTypes.string,
  numSelected: PropTypes.number.isRequired,
  isHide: PropTypes.bool,
};

export default TableToolbar;
