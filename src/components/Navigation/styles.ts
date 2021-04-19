import styled, { css } from 'styled-components';
import { Container as BSContainer } from 'react-bootstrap';
import { HEADER_HEIGHT } from '../Header';

const defaultGap = 70;
const defaultFontSize = 20;

export const Anchor = styled.div<{ navHeight: number; bgImage?: string }>`
  position: relative;

  ${({ navHeight }) => css`
    top: -${navHeight + HEADER_HEIGHT}px;

    @media (max-width: 991px) {
      top: -${navHeight}px;
    }
  `}

  ${({ bgImage }) => css`
    background-image: url(${bgImage});
  `}
`;

export const Container = styled(BSContainer)``;

export const Wrapper = styled.div<{
  color: string;
  navHeight: number;
  bgImage?: string;
  gap?: number;
  fontSize?: number;
}>`
  ${({ color, bgImage, fontSize }) => css`
    background-color: ${color};
    background-image: url(${bgImage});
    font-size: ${fontSize || defaultFontSize}px;
  `};
  background-size: cover;
  position: sticky;
  top: ${HEADER_HEIGHT}px;
  z-index: 2;

  ${Container} {
    display: flex;
    gap: ${({ gap }) => gap || defaultGap}px;
  }

  a {
    padding: 0;
    display: flex;
    align-items: center;
    color: white;
    ${({ navHeight }) => css`
      min-height: ${navHeight}px;
      line-height: ${navHeight / 3.5}px;
    `}
  }

  @media (max-width: 991px) {
    display: none;
  }
`;
