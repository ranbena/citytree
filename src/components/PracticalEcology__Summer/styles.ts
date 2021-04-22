import styled from 'styled-components';
import navBgImage from 'src/assets/images/practical-ecology-summer/SummerMagic_titleStrip_01.png';
import navBgImageWinter from 'src/assets/images/practical-ecology-winter/WinterMagic_titlesStrip_02.png';
import BoxComponent, { BoxInner } from '../Box';
import NavComponent, { Anchor as AnchorComponent } from '../Navigation';

export const MainWrapper = styled.div`
  font-family: Assistant;
  color: #4a251d;
  font-size: 1.3rem;
  line-height: 1.5rem;

  h3 {
    font-weight: bold;
    font-size: 42px;
    letter-spacing: 1.1px;
    margin-bottom: 8px;
    color: #4a251d;
  }

  h4 {
    font-weight: normal;
    color: #4a251d;
    font-size: 1.5rem;
    letter-spacing: 2.4px;
    margin: 0;
    text-transform: uppercase;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.81rem;
    font-weight: 300;

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }

    strong {
      margin: 10px 0;
      font-weight: 600;
      display: block;
      font-size: 25px;
    }
  }
`;

export const Navigation = styled(NavComponent).attrs({
  color: 'transparent',
  navHeight: 70,
  bgImage: navBgImage,
  fontSize: 23,
})``;

export const Anchor = styled(AnchorComponent).attrs({
  navHeight: 70,
})``;

export const WinterAnchor = styled.a`
  background-image: url(${navBgImageWinter});
  color: #073763 !important;
  padding: 0 40px !important;
  margin: 0 -40px;
`;

export const Title = styled.h1`
  position: relative;
  font-weight: bold;
  font-size: 2.33rem;
  color: #4a251d;

  @media (max-width: 630px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h2`
  position: relative;
  font-weight: 300;
  font-size: 1.75rem;
  color: #4a251d;

  /* @media (max-width: 630px) {
    font-size: 2rem;
  } */
`;

export const Box = styled(BoxComponent)`
  ${BoxInner} {
    background-color: #fafaf0;
  }
`;

export const Button = styled.button`
  font-family: Assistant;
  background-color: #7d483d;
  color: white;
  font-size: 26px;
  font-weight: 500;
  min-width: 220px;
  text-align: center;
  line-height: 35px;
  border: 0;
  border-radius: 5px;
  padding: 16px 20px;
  transition: background-color 150ms linear;

  &:hover {
    background-color: #633e36;
  }
`;
