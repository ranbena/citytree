import styled from 'styled-components';
import Hero from 'src/components/Hero';
import { Title } from 'src/components/Box';
import { breakpointsMin } from 'src/utils';

export const VisionHero = styled(Hero)`
  .vision-main {
    border-radius: 70px;
    text-align: center;
    padding-left: 60px;
    padding-right: 60px;
  }

  .vision-title {
    margin-bottom: 10px;
  }

  .side-column {
    @media ${breakpointsMin.md} {
      --gap: 15px;
    }
  }

  .floatBox {
    min-width: 210px;

    body[dir='ltr'] & {
      padding-left: 15px !important;
      padding-right: 15px !important;
    }

    body[dir='ltr'] & ${Title} {
      font-size: 22px;
    }

    &.top {
      margin-inline-start: 8%;
    }

    &.center {
      min-width: 170px;
      margin-inline-start: 35%;
    }
  }
`;
