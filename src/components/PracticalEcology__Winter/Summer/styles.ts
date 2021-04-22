import styled from 'styled-components';
import { Container as BSContainer } from 'react-bootstrap';
import bgImage from 'src/assets/images/practical-ecology-summer/SummerMagic_WelcomePic.png';
import { MainWrapper, Box as MainBox, Button as MainButton, Title as MainTitle } from '../styles';
import { BoxInner } from '../../Box';

export const Wrapper = styled(MainWrapper)`
  background: #786452 url(${bgImage}) no-repeat right top;
  background-size: auto 100%;

  direction: ltr; // in He, the direction switch doesn't work with the image

  p:not(:last-child) {
    margin-bottom: 1.3rem;
  }
`;

export const Container = styled(BSContainer)`
  padding: 116px 0;
`;

export const Title = styled(MainTitle)`
  color: #4a251d;
  font-weight: 600;
  margin-bottom: 40px;
`;

export const Box = styled(MainBox)`
  padding: 50px;

  ${BoxInner} {
    background-color: #fafaf0;
    color: #4a251d;
  }

  body[dir='rtl'] & {
    direction: rtl;
  }
`;

export const Button = styled(MainButton)`
  background-color: #7d483d;

  &:hover {
    background-color: #633e36;
  }
`;
