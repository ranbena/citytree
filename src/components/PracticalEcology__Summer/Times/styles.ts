import styled from 'styled-components';
import { Container as BSContainer } from 'react-bootstrap';
import overviewImage from 'src/assets/images/practical-ecology-summer/times-bg.jpg';
import { MainWrapper, Box as MainBox } from '../styles';

export const Wrapper = styled(MainWrapper)`
  background: #eaeff1 url(${overviewImage}) no-repeat left bottom;
  background-size: cover;

  direction: ltr; // in He, the direction switch doesn't work with the image

  p {
    font-size: 30px;
    line-height: 40px;
  }
`;

export const Container = styled(BSContainer)`
  padding: 160px 0 202px;
`;

export const Box = styled(MainBox)`
  padding: 0 35px;

  body[dir='rtl'] & {
    direction: rtl;
  }
`;

export const Title = styled.h2`
  font-size: 42px;
  margin-bottom: 30px;
`;
