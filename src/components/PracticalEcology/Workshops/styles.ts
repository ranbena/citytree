import styled, { css } from 'styled-components';
import { TabContent, Nav } from 'react-bootstrap';
import ltrBgImage from 'src/assets/images/practical-ecology/workshops-bg.jpg';
import { breakpoints } from 'src/utils';
import { MainWrapper } from '../styles';

export const Wrapper = styled(MainWrapper)`
  background: url(${ltrBgImage}) center top;
  background-size: cover;
  padding: 112px 0 97px;
  color: white;
`;

export const Title = styled.h2`
  font-size: 45px;
  line-height: 50px;
`;

export const Subtitle = styled.div`
  font-size: 30px;
  line-height: normal;
  margin-bottom: 92px;
`;

export const Tabs = styled(Nav)`
  border: 0;
  align-items: flex-end;
  margin: 0 -2px -8px;

  & a {
    height: 66px;
    font-family: Proza Libre;
    font-size: 17px;
    color: #135049;
    background-color: #ecefee;
    padding: 25px 40px 0;
    border: 0;
    text-transform: uppercase;
    margin: 0 2px;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;

    &.active {
      height: 79px;
      padding-top: 32px;
      background-color: white;
      color: #135049 !important;
    }

    @media ${breakpoints.md} {
      padding-left: 13px;
      padding-right: 13px;
    }
  }

  @media ${breakpoints.sm} {
    display: none;
  }
`;

export const Content = styled(TabContent)`
  background: white;
  padding: 57px 70px 52px;
  border-radius: 10px;
  position: relative;
  z-index: 1;

  @media ${breakpoints.sm} {
    padding: 35px;
  }
`;

export const BottomNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 52px;

  @media ${breakpoints.sm} {
    padding-top: 35px;
  }
`;

export const NavLink = styled.a<{ $hidden: boolean }>`
  color: #003535 !important;
  font-size: 20px;
  cursor: pointer;
  visibility: ${(p) => (p.$hidden ? 'hidden' : 'visible')};
  white-space: nowrap;

  &:hover {
    text-decoration: underline !important;
  }
`;

const leftArrow = css`
  content: '← ';
`;

const rightArrow = css`
  content: ' →';
`;

export const Next = styled(NavLink)`
  &:after {
    ${rightArrow}

    body[dir="rtl"] & {
      ${leftArrow}
    }
  }
`;

export const Prev = styled(NavLink)`
  &:before {
    ${leftArrow}

    body[dir="rtl"] & {
      ${rightArrow}
    }
  }
`;

export const Prefix = styled.span`
  @media ${breakpoints.lg} {
    display: none;
  }
`;
