import styled, { css } from 'styled-components';
import { Wrapper as Box } from '../Box/styles';

export const Wrapper = styled.div<{ boxColor?: string; bgColor?: string }>`
  padding: 50px 0;
  min-height: 500px;
  position: relative;
  background-color: ${({ bgColor }) => bgColor};

  ${Box} {
    background-color: ${({ boxColor }) => boxColor};
  }
`;

export const Image = styled.img<{ $position: 'right' | 'left' | 'center' }>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
  pointer-events: none;
  object-fit: cover;
  ${({ $position }) => css`
    object-position: top ${$position};
  `}
`;
