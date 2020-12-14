import styled, { css } from 'styled-components';
import { HEADER_HEIGHT } from '../Header';

export const Anchor = styled.div<{ navHeight: number }>`
  position: relative;

  ${({ navHeight }) => css`
    top: -${navHeight + HEADER_HEIGHT}px;

    @media (max-width: 991px) {
      top: -${navHeight}px;
    }
  `}
`;

export const Wrapper = styled.div<{ color: string; navHeight: number }>`
  font-size: 20px;
  background-color: ${(p) => p.color};
  position: sticky;
  top: ${HEADER_HEIGHT}px;
  z-index: 2;

  a {
    padding: 0 16px;
    margin-right: 70px;
    display: inline-block;
    color: white;
    ${({ navHeight }) => css`
      height: ${navHeight}px;
      line-height: ${navHeight}px;
    `}
  }

  @media (max-width: 991px) {
    display: none;
  }
`;
