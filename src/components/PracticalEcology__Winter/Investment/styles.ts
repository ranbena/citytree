import styled from 'styled-components';
import { breakpoints } from 'src/utils';
import bgImage from 'src/assets/images/practical-ecology-winter/WinterMagic_PriceBanner_01.png';

import { MainWrapper, Title as MainTitle } from '../styles';

export const Wrapper = styled(MainWrapper)`
  text-align: center;
  box-sizing: content-box;
  color: white;
  position: relative;
  overflow: hidden;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: right bottom;

  p {
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
  }
`;

export const Title = styled(MainTitle)`
  color: white;
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
  box-shadow: 0 0 0 1px #78915f; // it's a border collapse trick (along with grid-gap: 1px)!
  background-color: #def2cf;
  color: #436813;
  display: grid;
  grid-template-rows: 60px 120px;

  &:nth-child(2) {
    background-color: #d5f0c0;
  }
`;

export const TierTitle = styled.div`
  align-self: center;
  font-size: 1.4rem;
`;

export const Price = styled.div`
  border-top: 1px solid #78915f;
  display: grid;
  place-content: center;
  font-size: 3.1rem;
  line-height: 2.8rem;
  font-family: adobe hebrew;
`;
