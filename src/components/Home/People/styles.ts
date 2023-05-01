import styled from 'styled-components';
import Hero from 'src/components/Hero';
import { Title } from 'src/components/Box';
import { breakpointsMin, breakpoints } from 'src/utils';

export const PeopleHero = styled(Hero)`
  .people-main {
    border-radius: 70px;
    text-align: center;
    padding-left: 60px;
    padding-right: 60px;

    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      text-align: start;

      li {
        margin-top: 10px;
      }
    }
  }

  .people-title {
    margin-bottom: 10px;
  }

  .main-row {
    @media ${breakpoints.md} {
      flex-direction: column-reverse;
    }
  }

  .side-column {
    direction: ltr;

    body[dir='ltr'] & {
      direction: rtl;
    }

    @media ${breakpointsMin.md} {
      --gap: 15px;
    }
  }

  .floatBox {
    min-width: 210px;
    direction: rtl;

    body[dir='ltr'] & {
      direction: ltr;
      padding-left: 15px !important;
      padding-right: 15px !important;
    }

    body[dir='ltr'] & ${Title} {
      font-size: 22px;
    }

    &.top {
      margin-inline-end: 8%;
    }

    &.center {
      min-width: 170px;
      margin-inline-end: 35%;
    }
  }
`;
