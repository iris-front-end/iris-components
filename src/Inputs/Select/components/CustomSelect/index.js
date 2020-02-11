import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { useTheme } from '@material-ui/styles';

import CustomSingleValue from './components/CustomSingleValue';
import IconOption from './components/IconOption';
import Label from 'components/Inputs/Label';

import { selectStyles } from './utils';
import i18n from 'helpers/i18n';
import { SelectWrapper } from '../../style';

const CustomSelect = ({
  id,
  placeholder,
  light,
  options,
  grouped,
  label,
  isDisabled,
  width,
  handleChange,
  value,
}) => {
  const myTheme = useTheme();

  return (
    <SelectWrapper
      last={options.length}
      light={light}
      width={width}
      grouped={grouped}
    >
      <Label id={`label-${id}`}>{label}</Label>
      <Select
        id={id}
        className="react-select"
        classNamePrefix="react-select"
        name="form-field-name"
        placeholder={placeholder || i18n.t('components.select')}
        isDisabled={isDisabled}
        value={value || null}
        onChange={e => handleChange(e)}
        components={{ SingleValue: CustomSingleValue, Option: IconOption }}
        options={options}
        theme={selectStyles(light, myTheme)}
      />
    </SelectWrapper>
  );
};

CustomSelect.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  light: PropTypes.bool,
  options: PropTypes.array,
  label: PropTypes.string,
  width: PropTypes.string,
  grouped: PropTypes.bool,
  handleChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  value: PropTypes.object,
};

export default CustomSelect;
