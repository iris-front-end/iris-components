import styled from 'styled-components';

const bgColor = {
  valid: '#bfa2ec',
  error: '#ED8788',
  warning: '#FFEE6A',
};

export const BoxWrapper = styled.div`
  font-family: 'Open Sans', sans-serif;
  width: ${props =>
    props.width
      ? typeof props.width === 'number'
        ? `${props.width}px`
        : props.width
      : '100%'};
  max-height: ${props => (props.show ? '200px' : '0')};

  overflow: hidden;
  transition: max-height 0.5s, opacity 0.5s, padding 0.5s;
  padding: ${props => (props.show ? '12px 15px' : '')};
  box-sizing: border-box;
  resize: none;
  border-radius: 3px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => bgColor[props.type]};
  color: ${props => props.theme.colors.black};
  cursor: pointer;

  span {
    margin-left: 10px;
    text-align: left;
  }
`;
