import styled from 'styled-components';
import { Container as BSContainer } from 'react-bootstrap';
import leaf1 from 'src/assets/images/abracadabra-en/leaf1.png';
import leaf2 from 'src/assets/images/abracadabra-en/leaf2.png';
import { MainWrapper, Title, Box, List as MainList } from '../styles';
import { BoxInner } from '../../Box';

export const Wrapper = styled(MainWrapper)`
  background-color: #ebf0dd;
  border-bottom: 10px solid #003535;
  position: relative;

  ${Box} {
    padding: 0;
  }
`;

export const Leaf1 = styled.div`
  position: absolute;
  width: 356px;
  height: 604px;
  top: -149px;
  right: 0;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: calc(1725px * 0.35);
    height: calc(1437px * 0.35);
    background: url(${leaf1});
    background-size: 100%;
    transform: rotate(-115deg);
  }

  @media (max-width: 880px) {
    display: none;
  }
`;

export const TopBox = styled(Box)`
  text-align: center;

  ${BoxInner} {
    padding: 35px;
  }

  ${Title} {
    margin-bottom: 0;
  }
`;

export const LeftBox = styled(Box).attrs({
  color: '#223a39',
})`
  color: white;

  h3 {
    color: white;
  }
`;

export const BottomBox = styled(Box)`
  ${BoxInner} {
    padding: 40px;

    h3 {
      margin-bottom: 1.7rem;
    }

    p {
      margin: 0;
    }
  }
`;

export const Container = styled(BSContainer)`
  padding-top: 53px;
  padding-bottom: 53px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 19%;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 0;
    background-color: #dce3cc;
    mask-image: url(${leaf2});
    mask-size: auto 108%;
    mask-position: center;
    mask-repeat: no-repeat;
  }

  &:after {
    content: '';
    position: absolute;
    left: -212px;
    bottom: 114px;
    pointer-events: none;
    z-index: 0;
    background: url(${leaf2}) no-repeat top right;
    background-size: auto 100%;
    width: 400px;
    height: 440px;
    transform: rotate(55deg);

    @media (max-width: 880px) {
      display: none;
    }
  }
`;

export const Boxes = styled.div`
  display: flex;
  padding: 53px 0 0;

  ${Box} {
    flex: 1;
    margin-bottom: 53px;

    ${BoxInner} {
      padding: 55px 55px 40px;

      @media (max-width: 630px) {
        padding: 35px;
      }
    }
  }

  ${LeftBox} {
    flex: 0 1 440px;
    margin-right: 53px;
  }

  @media (max-width: 991px) {
    flex-direction: column;

    ${LeftBox} {
      margin-right: 0;
    }
  }
`;

export const List = styled(MainList).attrs({
  color: 'white',
})`
  margin-left: -6px;

  strong {
    font-weight: 500;
  }
`;
