import styled from 'styled-components';
import { Container as BSContainer } from 'react-bootstrap';
import overviewImage from 'src/assets/images/practical-ecology-winter/WinterMagic_MainPic_02-min.png';
import { MainWrapper, Box as MainBox } from '../styles';

export const Wrapper = styled(MainWrapper)`
  background: #f6f9e8ff url(${overviewImage}) no-repeat right top;
  background-size: auto 100%;

  direction: ltr; // in He, the direction switch doesn't work with the image
`;

export const Container = styled(BSContainer)`
  padding: 116px 0;
`;

export const Box = styled(MainBox)`
  padding: 40px;

  body[dir='rtl'] & {
    direction: rtl;
  }
`;
