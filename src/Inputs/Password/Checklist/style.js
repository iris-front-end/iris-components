import styled from 'styled-components';

export const ChecklistWrapper = styled.div(
  props => `
    height: ${props.allValid ? 'auto' : props.height ? props.height : '72px'};

    @media ${props.theme.device.mobileL} {
      height: auto;
    }

    & > * {
      transition: ${props.allValid ? 'padding 0s' : 'none !important'};
    }
  `
);

export const Items = styled.div(
  props => `
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: ${props.show ? '200px' : '0'};
    height: ${props.height ? props.height : '72px'};
    overflow: hidden;
    justify-content: center;

    @media ${props.theme.device.mobileL} {
      height: auto;
      flex-wrap: nowrap;
    }
  `
);

export const Item = styled.p(
  props => `
    display: flex;
    margin: 0;
    line-height: 24px;
    color: ${props.valid ? '#c4c4c4' : '#494949'};

    span:before {
      content: ' ';
      display: inline-block;
      width: 8px;
      height: 8px;
      background-color: ${
        props.valid ? '#c4c4c4' : props.theme.colors.purpleDark
      };
      margin-right: 7px;
      border-radius: 50%;
    }
  `
);
