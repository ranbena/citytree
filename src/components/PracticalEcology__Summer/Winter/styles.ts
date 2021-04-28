import styled from 'styled-components';
import { Container as BSContainer } from 'react-bootstrap';
import bgImage from 'src/assets/images/practical-ecology-winter/WinterMagic_MainPic_02-min.png';
import { MainWrapper, Box as MainBox, Button as MainButton, Title as MainTitle } from '../styles';

export const Wrapper = styled(MainWrapper)`
  background: #786452 url(${bgImage}) no-repeat right top;
  background-size: auto 100%;

  direction: ltr; // in He, the direction switch doesn't work with the image
`;

export const Container = styled(BSContainer)`
  padding: 116px 0;
`;

export const Title = styled(MainTitle)`
  font-weight: 600;
  margin-bottom: 30px;
`;

export const Box = styled(MainBox)`
  padding: 40px;

  body[dir='rtl'] & {
    direction: rtl;
  }
`;

export const Button = styled(MainButton)`
  background-color: #2e6a2f;

  &:hover {
    background-color: #29542a;
  }
`;
