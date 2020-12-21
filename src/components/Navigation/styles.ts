import styled from 'styled-components';
import { HEADER_HEIGHT } from '../Header';

export const NAVIGATION_HEIGHT = 53;

export const Anchor = styled.div`
  position: relative;
  top: -${NAVIGATION_HEIGHT + HEADER_HEIGHT}px;

  @media (max-width: 991px) {
    top: -${HEADER_HEIGHT}px;
  }
`;

export const Wrapper = styled.div<{ color: string }>`
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
    height: ${NAVIGATION_HEIGHT}px;
    line-height: ${NAVIGATION_HEIGHT}px;
  }

  @media (max-width: 991px) {
    display: none;
  }
`;
