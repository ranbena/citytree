import styled from 'styled-components';
import { Container as BSContainer } from 'react-bootstrap';
import overviewImage from 'src/assets/images/abracadabra-he/Abra_Einat_Pic.jpg';
import { MainWrapper, Box as MainBox, Title as MainTitle } from '../styles';
import { BoxInner } from '../../Box';

export const Wrapper = styled(MainWrapper)`
  background: url(${overviewImage});
  background-size: cover;
  background-position: center;
`;

export const Container = styled(BSContainer)`
  padding: 300px 0 250px;
`;

export const Title = styled(MainTitle)`
  color: #ffe8e8;
`;

export const Box = styled(MainBox)`
  ${BoxInner} {
    background-color: #1c2d04b2;
    padding: 50px 40px;

    p {
      color: #ffe8e8;
    }
  }
`;
