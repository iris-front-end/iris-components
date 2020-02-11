import styled, { css } from 'styled-components';
import ButtonMaterial from '@material-ui/core/Button';

const sizes = {
  small: '90px',
  medium: '140px',
  large: '200px',
  xlarge: '260px',
  full: '100%',
};

const buttons = {
  primary: {
    variant: 'contained',
    style: css``,
  },

  login: {
    variant: 'contained',
    style: css(
      props => `
        background: ${props.theme.button['primary']};
        font-weight: bold;
        height: 48px;

        &:hover {
          background: ${props.theme.button['primary']};

          & svg {
            & g {
              stroke: #fff;
            }
          }
        }

        &::before {
          background: ${props.theme.button['primary']};
        }
      `
    ),
  },

  'semi-dark': {
    variant: 'outlined',
    style: css(
      props => `
        background: ${props.theme.button['darkWhite']};
        color: ${props.theme.button['blueGray']};

        &:hover {
          background: ${props.theme.button['blueGray']};
          color: ${props.theme.button['darkWhite']};

          & svg {
            & g {
              stroke: #fff;
            }
          }

          &::before {
            background: ${props.theme.button['blueGray']};
          }
        }

        &::before {
          background: ${props.theme.button['darkWhite']};
        }
      `
    ),
  },

  dark: {
    variant: 'contained',
    style: css(
      props => `
        background: ${props.theme.button['blueGray']};

        &:hover {
          background: ${props.theme.button['blueGray']};

          & svg {
            & g {
              stroke: #fff;
            }
          }
        }

        &::before {
          background: ${props.theme.button['blueGray']};
        }
      `
    ),
  },

  'outlined-dark': {
    variant: 'outlined',
    style: css(
      props => `
        background: ${props.theme.button['darkWhite']};
        color: ${props.theme.button['blueGray']};

        &:hover {
          background: ${props.theme.button['blueGray']};
          color: ${props.theme.button['darkWhite']};
          filter: none;

          & .loading div {
            background-color: ${props.theme.button['darkWhite']};
          }
        }

        &::before {
          background: ${props.theme.button['blueGray']};
        }

        & .loading div {
          background-color: ${props.theme.button['blueGray']};
        }
      `
    ),
  },

  outlined: {
    variant: 'outlined',
    style: css(
      props => `
        background: ${props.theme.button['darkWhite']};
        color: ${props.theme.button['pink']};

        &:hover {
          background: ${`linear-gradient(to right, ${props.theme.button['danger']}, ${props.theme.button['pink']})`};
          color: ${props.theme.button['darkWhite']};
          filter: none;

          & .loading div {
            background: ${props.theme.button['darkWhite']};
          }
        }

        &::before {
          background: ${`linear-gradient(to right, ${props.theme.button['danger']}, ${props.theme.button['pink']})`};
        }

        & .loading div {
          background: ${`linear-gradient(to right, ${props.theme.button['pink']}, ${props.theme.button['danger']})`};
        }
      `
    ),
  },

  text: {
    variant: 'text',
    style: css(
      props => `
        background: transparent;
        color: ${props.theme.button['pink']};
        height: auto;
        min-height: 24px;
        width: auto;

        &:hover {
          background: transparent;
          color: ${props.theme.button['danger']};

          & .loading div {
            background: ${props.theme.button['danger']};
          }
        }

        &::before {
          display: none;
        }

        & .loading div {
          background: ${`linear-gradient(to right, ${props.theme.button['pink']}, ${props.theme.button['danger']})`};
        }

        & .MuiTouchRipple-root {
          display: none;
        }
      `
    ),
  },
};

export const ButtonStyle = css`
  background: ${props =>
    `linear-gradient(to right, ${props.theme.button['danger']}, ${props.theme.button['pink']})`};
  background-clip: padding-box;
  border: none;
  border-radius: ${props => (props.rounded ? '20px' : '3px')};
  box-shadow: none;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  height: 42px;
  max-width: 100%;
  padding: 0;
  position: relative;
  text-decoration: none;
  text-transform: none;
  width: ${props => sizes[props.size]};

  &:hover {
    color: ${props => props.theme.colors.white};
    filter: contrast(1.15);
  }

  &:active {
    box-shadow: none;
  }

  &.Mui-disabled {
    color: ${props => props.theme.colors.white};

    &::before {
      background: rgba(0, 0, 0, 0.12);
    }
  }

  &::before {
    background: ${props =>
      `linear-gradient(to right, ${props.theme.button['danger']}, ${props.theme.button['pink']})`};
    border-radius: ${props => (props.rounded ? '30px' : '4px')};
    bottom: 0;
    content: ' ';
    left: 0;
    margin: -2px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }

  & .loading div {
    background-color: ${props => props.theme.colors.white};
  }

  & > span {
    display: flex;
    height: 100%;
  }

  svg {
    font-size: 22px;
  }

  ${props => buttons[props.type].style}
`;

export const Button = styled(ButtonMaterial).attrs(props => ({
  variant: buttons[props.buttontype].variant,
}))``;

export const ButtonWrapper = styled.div`
  padding: ${props => (props.size !== 'full' ? '8px' : '8px 0')};
  position: relative;
  display: block;
  z-index: 1;

  button,
  a {
    ${ButtonStyle}
  }
`;
