import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { map, every } from 'lodash';

import WarningBox from 'components/Feedback/WarningBox';

import i18n from 'helpers/i18n';
import { checklistUtils } from './utils';

import { ChecklistWrapper, Items, Item } from './style';

const { items, samePassword } = checklistUtils;

const PATH = 'login.recoverPassword.warnings';

const Checklist = props => {
  const [allValid, setValidate] = useState(false);

  const validatation = () => {
    const allItemsValids = every(items, ({ valid }) => valid(props.value));

    if (allItemsValids && props.hasSamePasswords) {
      setValidate(true);
      props.onAllValids && props.onAllValids(true);
    } else {
      setValidate(false);
      props.onAllValids && props.onAllValids(false);
    }
  };

  useEffect(validatation);

  return (
    <ChecklistWrapper height={props.height} allValid={allValid}>
      <Items show={!allValid}>
        {map(items, ({ title, valid, label }, i) => (
          <Item
            id={`${props.id}-item-${i}`}
            title={i18n.t(title)}
            valid={valid(props.value)}
            index={i}
            key={i}
          >
            <span>{i18n.t(label)}</span>
          </Item>
        ))}

        <Item
          id={`${props.id}-item-${items.length}`}
          title={i18n.t(samePassword.title)}
          valid={props.hasSamePasswords}
          index={samePassword.label}
          key={samePassword.label}
        >
          <span>{i18n.t(samePassword.label)}</span>
        </Item>
      </Items>

      <WarningBox
        message={i18n.t(`${PATH}.securePassword`)}
        type="valid"
        show={allValid}
      />
    </ChecklistWrapper>
  );
};

Checklist.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onAllValids: PropTypes.func,
  height: PropTypes.number,
  hasSamePasswords: PropTypes.bool,
};

export default Checklist;
