import styled from 'styled-components';
import navBgImage from 'src/assets/images/abracadabra-he/Abra_TopMenu.jpg';
import BoxComponent, { BoxInner } from '../Box';
import NavComponent, { Anchor as AnchorComponent } from '../Navigation';

export const MainWrapper = styled.div`
  font-family: Assistant;
  color: #3d1a62;
  font-size: 1.3rem;
  line-height: 1.5rem;

  h3 {
    font-weight: bold;
    font-size: 42px;
    letter-spacing: 1.1px;
    margin-bottom: 14px;
    color: #3d1a62;
  }

  h4 {
    font-weight: normal;
    color: #3d1a62;
    font-size: 1.5rem;
    letter-spacing: 2.4px;
    margin: 0;
    text-transform: uppercase;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5rem;
    font-weight: 300;

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }

    strong {
      margin: 10px 0;
      font-weight: 600;
      display: block;
      font-size: 20px;
    }
  }
`;

export const Navigation = styled(NavComponent).attrs({
  color: 'transparent',
  navHeight: 70,
  bgImage: navBgImage,
  fontSize: 23,
})`
  a {
    color: #e4fa79;
  }
`;

export const Anchor = styled(AnchorComponent).attrs({
  navHeight: 70,
})``;

export const Title = styled.h1`
  position: relative;
  font-weight: bold;
  font-size: 2rem;
  color: #3d1a62;

  @media (max-width: 630px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h2`
  position: relative;
  font-weight: 300;
  font-size: 1.75rem;
  color: #3d1a62;

  /* @media (max-width: 630px) {
    font-size: 2rem;
  } */
`;

export const Box = styled(BoxComponent)`
  padding: 0;

  ${BoxInner} {
    background-color: #ffe8f0d8;
    padding: 30px 40px;
  }
`;

export const Button = styled.button`
  font-family: Assistant;
  background-color: #3d1a62f0;
  color: #a66be4;
  font-size: 14pt;
  font-weight: 500;
  min-width: 220px;
  text-align: center;
  line-height: 18px;
  border: 1px solid #a66be4;
  border-radius: 2px;
  padding: 14px 20px;
  transition: background-color 150ms linear;

  &:hover {
    background-color: #29163e;
  }

  strong {
    color: #fa73fa;
    font-family: Frank Ruhl Libre;
    margin-right: 8px;
    font-size: 15pt;
    font-weight: 300;
    text-shadow: 0 0 4px rgba(255, 255, 255, 0.84);
  }
`;
