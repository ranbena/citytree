import styled from 'styled-components';
import Hero from 'src/components/Hero';
import { Title } from 'src/components/Box';
import { breakpointsMin, breakpoints } from 'src/utils';

export const PeopleHero = styled(Hero)`
  .people-main {
    border-radius: 50px;
    text-align: right;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #2b4b2580;

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
  p {
    color: #e6f1d6ff;  
    margin: 0;
    padding: 0;
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
    direction: rtl;

    body[dir='rtl'] & {
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
