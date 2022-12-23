import styled from 'styled-components';
import { Container as BSContainer } from 'react-bootstrap';
import {
  BoxInner as BoxInnerComponent,
  Title as BoxTitle,
  Paragraph as BoxParagraph,
} from 'src/components/Box';
import BSHero from 'src/components/Hero';
import { HEADER_HEIGHT } from 'src/components/Header';
import { breakpoints } from 'src/utils';

export const TopParallaxContent = styled.div`
  height: calc(100vh - ${HEADER_HEIGHT}px);

  @media ${breakpoints.sm} {
    height: calc(90vh - ${HEADER_HEIGHT}px);
  }
`;

export const Container = styled(BSContainer)`
  .row {
    display: flex;
    justify-content: center;
  }
`;

export const BoxInner = styled(BoxInnerComponent)`
  padding: 30px 60px;
  color: #120e34;

  @media ${breakpoints.sm} {
    padding: 30px;
  }
`;

export const Hero = styled(BSHero)`
  padding-top: ${HEADER_HEIGHT}px;
`;

export const Wrapper = styled.div`
  .bottomParallax {
    overflow: visible !important;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .topParallax img {
    top: -150px;
  }
`;

export const Title = styled(BoxTitle)`
  font-size: 34px;
  margin-bottom: 35px;

  @media ${breakpoints.xl} {
    font-size: 32px;
  }

  @media ${breakpoints.md} {
    font-size: 22px;
    margin-top: -10px;
    margin-bottom: 15px;
  }
`;

export const Paragraph = styled(BoxParagraph)`
  margin-bottom: 25px;
`;
