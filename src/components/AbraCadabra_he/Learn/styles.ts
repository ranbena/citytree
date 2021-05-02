import styled from 'styled-components';
import { Container as BSContainer } from 'react-bootstrap';
import overviewImage from 'src/assets/images/abracadabra-he/Abra_WhatLearning_Pic.jpg';
import { MainWrapper, Box as MainBox, Title as MainTitle } from '../styles';
import { BoxInner } from '../../Box';

export const Wrapper = styled(MainWrapper)`
  background: url(${overviewImage});
  background-size: cover;
`;

export const Container = styled(BSContainer)`
  padding: 116px 0;
`;

export const Title = styled(MainTitle)`
  color: #ffe8e8;
`;

export const Box = styled(MainBox)`
  ${BoxInner} {
    background-color: #1c2d04b2;

    p {
      color: #ffe8e8;
    }
  }
`;
