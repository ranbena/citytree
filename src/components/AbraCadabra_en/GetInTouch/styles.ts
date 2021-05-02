import styled from 'styled-components';
import leaf1 from 'src/assets/images/abracadabra-en/leaf1.png';
import { MainWrapper } from '../styles';

export const Wrapper = styled(MainWrapper)`
  padding: 110px 0 70px;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 920px) {
    padding-top: 70px;
  }

  &:before,
  &:after {
    content: '';
    background: url(${leaf1}) no-repeat;
    background-size: contain;
    position: absolute;

    @media (max-width: 920px) {
      display: none;
    }
  }

  &:before {
    left: -147px;
    top: -129px;
    width: 520px;
    height: 520px;
    transform: rotate(45deg);

    @media (max-width: 1130px) {
      left: -147px;
      top: -50px;
      width: 520px;
      height: 340px;
    }
  }

  &:after {
    right: -256px;
    bottom: -247px;
    width: 610px;
    height: 610px;
    transform: rotate(-136deg);

    @media (max-width: 1130px) {
      right: -256px;
      bottom: -221px;
      width: 510px;
      height: 610px;
    }
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 2.8rem;
  }
`;
