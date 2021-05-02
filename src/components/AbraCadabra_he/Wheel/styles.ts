import styled from 'styled-components';
import { Container as BSContainer } from 'react-bootstrap';
import overviewImage from 'src/assets/images/abracadabra-he/Abra_Wheel_Pic.jpg';
import { BoxInner } from '../../Box';
import { MainWrapper, Box as MainBox } from '../styles';

export const Wrapper = styled(MainWrapper)`
  background: url(${overviewImage}) no-repeat left bottom;
  background-size: cover;

  direction: ltr; // in He, the direction switch doesn't work with the image

  p {
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: #3d1a62;
  }
`;

export const Container = styled(BSContainer)`
  padding: 120px 0;
  text-align: left;
`;

export const Box = styled(MainBox)`
  background-color: #ffe8f0d8;
  padding: 30px;
  border-radius: 10px;

  ${BoxInner} {
    padding: 20px;
    background-color: transparent;
  }

  body[dir='rtl'] & {
    direction: rtl;
    text-align: right;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #3d1a62;
  font-weight: 600;
`;
