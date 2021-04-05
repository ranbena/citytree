import styled, { css } from 'styled-components';

import leaf1 from 'src/assets/images/abracadabra/leaf1.png';
import leaf2 from 'src/assets/images/leaf-bottom.png';
import { MainWrapper } from '../styles';

export const Wrapper = styled(MainWrapper)`
  text-align: center;
  border-bottom: 7px solid #223a39;
  box-sizing: content-box;
  color: #687f3f;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    background: url(${leaf1}) no-repeat;
    background-size: contain;
    position: absolute;
    left: -200px;
    top: -80px;
    width: 400px;
    height: 400px;
    transform: rotate(90deg);

    @media (max-width: 1190px) {
      top: -110px;
    }

    @media (max-width: 1100px) {
      top: -170px;
    }

    @media (max-width: 991px) {
      display: none;
    }
  }

  &:after {
    content: '';
    position: absolute;
    right: -115px;
    bottom: 120px;
    top: 160px;
    width: 100%;
    z-index: -1;
    pointer-events: none;
    mix-blend-mode: multiply;
    opacity: 0.35;
    background-image: url(${leaf2});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: auto 100%;

    @media (max-width: 991px) {
      display: none;
    }
  }

  p {
    max-width: 830px;
    margin: 0 auto 30px;
  }
`;

export const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
  padding: 100px 20px 70px;
  box-sizing: content-box;

  @media (max-width: 630px) {
    padding: 35px;
    text-align: left;
  }
`;

export const Tiers = styled.div`
  display: grid;
  grid-template:
    'solidarity regular pay . patrons' 1fr
    / 1fr 1fr 1fr 24px 1fr;
  grid-gap: 1px;
  margin: 40px 0 30px;
  text-align: center;

  @media (max-width: 991px) {
    grid-template:
      'solidarity regular pay' 1fr
      '. patrons .' 1fr
      / 1fr 1fr 1fr;
    grid-row-gap: 24px;
  }

  @media (max-width: 630px) {
    grid-template:
      'solidarity' 1fr
      'regular' 1fr
      'pay' 1fr
      'patrons' 1fr
      / 1fr;
    grid-row-gap: 25px;
  }
`;

export const Tier = styled.div<{ $name: string }>`
  box-shadow: 0 0 0 1px #7a8e54; // it's a border collapse trick (along with grid-gap: 1px)!
  grid-area: ${({ $name }) => $name};
  background-color: #f7f9f0;
  display: grid;
  grid-template-rows: auto 120px;

  ${({ $name }) => {
    switch ($name) {
      case 'regular':
        return css`
          background-color: #d1d9b0;
        `;
      case 'patrons':
        return css`
          font-style: italic;
          font-size: 1.3rem;
        `;
      default:
        return null;
    }
  }}
`;

export const Title = styled.div`
  align-self: center;
  font-size: 1.4rem;
  padding: 8px 0;
`;

export const Price = styled.div`
  border-top: 1px solid #7a8e54;
  display: grid;
  place-content: center;
  font-size: 3.1rem;
  line-height: 2.8rem;
  font-family: adobe hebrew;
`;

export const Nis = styled.div`
  font-size: 1.1rem;
  line-height: normal;
`;

export const Note = styled.div`
  margin-bottom: 40px;
`;
