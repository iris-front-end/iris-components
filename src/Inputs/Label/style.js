import styled from 'styled-components';

export const LabelStyle = `
  font-family: 'Montserrat', sans-serif;
  color: rgba(0, 0, 32, 0.8);
  text-transform: uppercase;
  font-size: 11px;
  line-height: 10px;
  overflow-wrap: break-word;
  display: block;
  text-decoration: none;
  height: 20px;
  line-height: 20px;
  padding-bottom: 2px;
`;

export const StyledLabel = styled.label`
  ${LabelStyle}
`;
