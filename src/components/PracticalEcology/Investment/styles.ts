import styled from 'styled-components';
import { breakpoints } from 'src/utils';

import leaf1 from 'src/assets/images/abracadabra/leaf1.png';
import leaf2 from 'src/assets/images/leaf-bottom.png';
import { MainWrapper } from '../styles';

export const Wrapper = styled(MainWrapper)`
  text-align: center;
  box-sizing: content-box;
  color: #386b7e;
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1px;
  margin: 40px 0 70px;
  text-align: center;

  @media ${breakpoints.md} {
    grid-template-columns: 1fr;
    grid-row-gap: 24px;
  }
`;

export const Tier = styled.div`
  box-shadow: 0 0 0 1px #386b7e; // it's a border collapse trick (along with grid-gap: 1px)!
  background-color: white;
  display: grid;
  grid-template-rows: 50px 120px;

  &:nth-child(2) {
    background-color: #8ca9b4;
    color: white;
  }
`;

export const Title = styled.div`
  align-self: center;
  font-size: 1.4rem;
`;

export const Price = styled.div`
  border-top: 1px solid #386b7e;
  display: grid;
  place-content: center;
  font-size: 3.1rem;
  line-height: 2.8rem;
  font-family: adobe hebrew;
`;
