import styled from 'styled-components';
import { breakpoints } from 'src/utils';
import bgImage from 'src/assets/images/abracadabra-he/Abra_Payment_Pic.jpg';

import { MainWrapper, Title as MainTitle } from '../styles';

export const Wrapper = styled(MainWrapper)`
  text-align: center;
  box-sizing: content-box;
  color: #3d1a62;
  position: relative;
  overflow: hidden;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;

  p {
    max-width: 830px;
    margin: 0 auto 30px;
  }
`;

export const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
  padding: 300px 20px;
  box-sizing: content-box;

  @media (max-width: 630px) {
    padding: 35px;
  }
`;

export const Tiers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1px;
  margin: 50px 0 80px;
  text-align: center;

  @media ${breakpoints.md} {
    grid-template-columns: 1fr;
    grid-row-gap: 24px;
  }
`;

export const Tier = styled.div`
  box-shadow: 0 0 0 1px #3d1a62; // it's a border collapse trick (along with grid-gap: 1px)!
  background-color: #ffe8f0d8;
  display: grid;
  grid-template-rows: 100px 120px;

  &:nth-child(2) {
    background-color: #fcd6d6e1;
  }

  strong {
    font-size: 1.6rem;
  }
`;

export const TierTitle = styled.div`
  align-self: center;
  font-size: 1.4rem;
  line-height: 35px;
`;

export const Price = styled.div`
  border-top: 1px solid #3d1a62;
  display: grid;
  place-content: center;
  font-size: 3.1rem;
  line-height: 2.8rem;
`;

export const Title = styled(MainTitle)`
  color: #ffe8e8;
  font-weight: 400;
  font-size: 38pt;
`;
