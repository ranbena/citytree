import styled, { css } from 'styled-components';
import { TabContent, Nav } from 'react-bootstrap';
import ltrBgImage from 'src/assets/images/practical-ecology-winter/WinterMagic_WorkshopsPic_01.png';
import { breakpoints } from 'src/utils';
import { MainWrapper } from '../styles';

type TabKey = 'prosperity' | 'agriculture' | 'cultivation';

const tabKeyColors: Record<
  TabKey,
  {
    bg: string;
    text: string;
  }
> = {
  prosperity: {
    bg: '#e3f2fe',
    text: '#073763',
  },
  agriculture: {
    bg: '#e3feee',
    text: '#076314',
  },
  cultivation: {
    bg: '#edfee3',
    text: '#436813',
  },
};

export const Wrapper = styled(MainWrapper)`
  background: url(${ltrBgImage}) center top;
  background-size: cover;
  padding: 69px 0 97px;
  color: white;
`;

export const Title = styled.h2`
  font-size: 45px;
  line-height: 50px;
  font-weight: 600;
  text-shadow: 0 0 2px #4a5835;
`;

export const Subtitle = styled.div`
  font-size: 25px;
  line-height: normal;
  margin-bottom: 32px;
  text-shadow: 0 0 4px #4a5835;
`;

export const Tabs = styled(Nav)`
  border: 0;
  align-items: flex-end;
  margin: 0 -2px -8px;

  & a {
    height: 54px;
    width: 150px;
    font-size: 21px;
    padding: 12px 20px 0;
    border: 0;
    text-transform: uppercase;
    margin: 0 2px;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;

    &.active {
      height: 69px;
      padding-top: 18px;
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

export const Tab = styled(Nav.Item)<{ tabKey: TabKey }>`
  a {
    ${({ tabKey }) => css`
      background-color: ${tabKeyColors[tabKey].bg};
      color: ${tabKeyColors[tabKey].text};
    `}
  }
`;

export const Content = styled(TabContent)<{ tabKey: TabKey }>`
  ${({ tabKey }) => {
    const colors = tabKeyColors[tabKey];
    return css`
      background-color: ${colors.bg};
      color: ${colors.text};
    `;
  }}
  padding: 28px 70px;
  border-radius: 10px;
  position: relative;
  z-index: 1;
  width: 91%;

  @media ${breakpoints.lg} {
    width: 100%;
  }

  @media ${breakpoints.sm} {
    padding: 35px;
  }
`;

export const BottomNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 18px;

  @media ${breakpoints.sm} {
    padding-top: 35px;
  }
`;

export const NavLink = styled.a<{ $hidden: boolean }>`
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
