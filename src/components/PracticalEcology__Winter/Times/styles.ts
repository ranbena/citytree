import styled from 'styled-components';
import { Container as BSContainer } from 'react-bootstrap';
import overviewImage from 'src/assets/images/practical-ecology-winter/WinterMagic_YearWheel_02.png';
import { BoxInner } from '../../Box';
import { MainWrapper, Box as MainBox } from '../styles';

export const Wrapper = styled(MainWrapper)`
  background: url(${overviewImage}) no-repeat left bottom;
  background-size: cover;

  direction: ltr; // in He, the direction switch doesn't work with the image

  p {
    font-size: 30px;
    line-height: 40px;
    color: white;
  }
`;

export const Container = styled(BSContainer)`
  padding: 160px 0 202px;
  text-align: left;
`;

export const Box = styled(MainBox)`
  background-color: #6c8e78e1;
  padding: 35px;
  border-radius: 10px;
  margin-bottom: 50px;

  ${BoxInner} {
    background-color: transparent;
  }

  body[dir='rtl'] & {
    direction: rtl;
    text-align: right;
  }
`;

export const Title = styled.h2`
  font-size: 42px;
  margin-bottom: 30px;
  color: white;
  font-weight: 600;
`;
