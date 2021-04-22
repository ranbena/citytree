import styled from 'styled-components';
import navBgImage from 'src/assets/images/practical-ecology-winter/WinterMagic_titlesStrip_02.png';
import navBgImageSummer from 'src/assets/images/practical-ecology-summer/SummerMagic_titleStrip_01.png';
import BoxComponent, { BoxInner } from '../Box';
import NavComponent, { Anchor as AnchorComponent } from '../Navigation';

export const MainWrapper = styled.div`
  font-family: Assistant;
  color: #274e13;
  font-size: 1.3rem;
  line-height: 1.5rem;

  h3 {
    font-weight: bold;
    font-size: 42px;
    letter-spacing: 1.1px;
    margin-bottom: 14px;
    color: #274e13;
  }

  h4 {
    font-weight: normal;
    color: #274e13;
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

export const SummerAnchor = styled.a`
  background-image: url(${navBgImageSummer});
  background-position: 92% top;
  color: #783f04 !important;
  padding: 0 40px !important;
  margin: 0 -40px;
`;

export const Title = styled.h1`
  position: relative;
  font-weight: bold;
  font-size: 2.33rem;
  color: #274e13;

  @media (max-width: 630px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h2`
  position: relative;
  font-weight: 300;
  font-size: 1.75rem;
  color: #274e13;

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
  background-color: #408e68;
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
    background-color: #3b7157;
  }
`;
