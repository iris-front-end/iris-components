import styled from 'styled-components';

export const HideShowPassword = styled.div(
  props => `
    font-family: 'Montserrat', sans-serif;
    color: rgba(0, 0, 32, 0.8);
    text-transform: uppercase;
    font-size: 11px;
    cursor: pointer;
    color: ${props.theme.colors.purpleDark};
    font-weight: bold;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    align-self: center;

    @media ${props.theme.device.mobileL} {
      font-size: 9px;
    }

    span {
      margin-left: 6px;
      line-height: 20px;
    }

    svg {
      font-size: 20px;
      align-self: flex-start;
    }
  `
);
