import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import Paragraph from 'components/Typography/Paragraph';
import Icon from 'components/Icon';

import { ExpansionWrapper, ExpansionPanelSummary, useStyles } from './style';

const ExpansionPanel = ({ id, data }) => {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ExpansionWrapper>
      {map(data, (elem, key) => (
        <MuiExpansionPanel
          className={classes.panel}
          expanded={expanded === key && !elem.disabled}
          onChange={handleChange(key)}
          disabled={elem.disabled}
          key={key}
        >
          <ExpansionPanelSummary
            expandIcon={<Icon type="expand-more" />}
            aria-controls={`${key}-content`}
            id={`${key}-header`}
          >
            <Paragraph id={`${id}-${key}-title`} like="h2" bold>
              {elem.title}
            </Paragraph>
          </ExpansionPanelSummary>

          <MuiExpansionPanelDetails>{elem.component}</MuiExpansionPanelDetails>
        </MuiExpansionPanel>
      ))}
    </ExpansionWrapper>
  );
};

ExpansionPanel.propTypes = {
  id: PropTypes.string,
  data: PropTypes.array,
};

export default ExpansionPanel;
