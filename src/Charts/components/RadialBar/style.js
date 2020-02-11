import styled from 'styled-components';

export const AnimatedWrapper = styled.div(props => ({
  display: 'flex',
  flex: 1,
  maxHeight: '100%',
  maxWidth: '100%',

  '& svg': {
    display: 'flex',
    flex: 1,
  },
  '& .text': {
    stroke: props.textColor,
    fill: props.textColor,
    dominantBaseline: 'middle',
    textAnchor: 'middle',
  },
  '& .trail': {
    stroke: props.trailColor,
    fill: props.trailColor,
    strokeWidth: props.trailWidth,
  },
  '& .path': {
    stroke: props.pathColor,
    fill: props.pathColor,
    strokeWidth: props.pathWidth,
    strokeLinecap: props.pathLineCap,
  },
}));
