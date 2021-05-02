import styled, { css } from 'styled-components';
import bullet from 'src/assets/images/abracadabra-en/bullet.svg';
import BoxComponent from '../Box';
import NavComponent, { Anchor as AnchorComponent } from '../Navigation';

export const MainWrapper = styled.div`
  font-family: minion-pro, serif;
  color: #687f3f;
  font-size: 1.3rem;
  line-height: 1.5rem;

  h3 {
    font-weight: normal;
    font-size: 1.7rem;
    letter-spacing: 0.13rem;
    margin-bottom: 3.5rem;
    color: #3d6122;
  }

  h4 {
    font-weight: normal;
    color: #687f3f;
    font-size: 1.3rem;
    margin: 0;
    letter-spacing: 0.15rem;
  }

  p {
    font-size: 1.3rem;
    line-height: 1.5rem;

    &:not(:last-child) {
      margin-bottom: 1.8rem;
    }
  }

  hr {
    border-color: #f6f7f3;
    margin: 2rem 0;
  }
`;

export const Navigation = styled(NavComponent).attrs({
  color: '#223a39',
  navHeight: 53,
})``;

export const Anchor = styled(AnchorComponent).attrs({
  navHeight: 53,
})``;

const TitleBullets = css`
  &:before,
  &:after {
    content: '';
    width: 13px;
    height: 13px;
    background-color: #687f3f;
    mask: url(${bullet}) no-repeat 100%/100%;
    position: absolute;
    top: 19px;
    left: -36px;

    @media (max-width: 630px) {
      top: 14px;
      left: -26px;
    }
  }
  &:after {
    right: -36px;
    left: auto;

    @media (max-width: 630px) {
      right: -26px;
    }
  }
`;

export const Title = styled.h2<{ bullets?: boolean }>`
  position: relative;
  display: inline-block;
  font-weight: normal;
  font-size: 2.3rem;
  letter-spacing: 0.15rem;
  color: #3d6122;

  @media (max-width: 630px) {
    font-size: 2rem;
  }

  ${(p) => p.bullets && TitleBullets}
`;

export const Box = styled(BoxComponent)`
  ${Title} {
    margin-bottom: 4rem;

    @media (max-width: 630px) {
      margin-bottom: 2.4rem;
    }
  }
`;

export const Button = styled.button`
  font-family: Assistant;
  background-color: #003535;
  color: white;
  font-size: 24px;
  width: 209px;
  height: 66px;
  text-align: center;
  line-height: 66px;
  border: 0;
  border-radius: 5px;
  padding: 0;
  transition: background-color 150ms linear;
  display: inline-block; // as="a"

  &:hover {
    background-color: #223a39;
    text-decoration: none;
    color: white;
  }
`;

export const List = styled.ul<{ color: string }>`
  padding: 0;
  list-style: none;

  li {
    display: grid;
    grid-area: content;
    grid-template-areas: 'bullet content';
    grid-template-columns: 40px auto;

    &:before {
      content: '';
      grid-area: bullet;
      width: 13px;
      height: 13px;
      margin-top: 8px;
      display: inline-block;
      background-color: ${({ color }) => color};
      mask: url(${bullet}) no-repeat 100%/100%;
    }

    &:not(:last-child) {
      margin-bottom: 19px;
    }
  }
`;
