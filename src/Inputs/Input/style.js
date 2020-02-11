import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';

export const InputHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.hasLabel ? 'space-between' : 'flex-end')};
`;

export const ErrorLabel = styled.span`
  font-family: Montserrat, sans-serif;
  font-size: 13px;
  line-height: 16px;
  position: absolute;
  top: 100%;
  text-align: left;
  color: #e96d6d;
  font-weight: bold;
  max-height: 50px;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  margin: 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 200px;
  flex: 1;
  flex-wrap: wrap;
  padding: ${props => props.noPadding && '8px'};

  .MuiInputBase-root {
    height: 100%;
    border-radius: 6px;
  }

  fieldset {
    padding: unset;
    border-radius: 6px;
  }

  .MuiOutlinedInput-input {
    padding: 5px 15px;
    border-radius: 6px;
  }

  .Mui-focused {
    fieldset {
      border-color: ${props =>
        props.light
          ? props.theme.colors.blueGray
          : props.theme.colors.purple}!important;
    }
  }
`;

export const useStyles = makeStyles({
  textField: props => ({
    backgroundColor: props => props.theme.colors.white,
    width: props.width,
    height: props.multiline ? 'auto' : props.height,
    borderRadius: '6px',
  }),
});
