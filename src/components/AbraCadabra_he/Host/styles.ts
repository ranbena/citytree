import styled from 'styled-components';
import { Container as BSContainer } from 'react-bootstrap';
import overviewImage from 'src/assets/images/abracadabra-he/Abra_tami_02_Yunes.png';
import { MainWrapper, Box as MainBox, Title as MainTitle } from '../styles';
import { BoxInner } from '../../Box';

export const Wrapper = styled(MainWrapper)`
  background: #786452;
  direction: ltr;
`;

export const Container = styled(BSContainer)`
  background: url(${overviewImage});
  background-size: contain;
  background-position: right center;
  background-repeat: no-repeat;
  padding: 70px 0;
`;

export const Title = styled(MainTitle)`
  color: #ffe8f0;
`;

export const Box = styled(MainBox)`
  direction: rtl;

  ${BoxInner} {
    background-color: #1c2d0497;
    padding: 50px 40px;
    color: #ffe8f0;

    p {
      color: #ffe8e8;
    }
  }
`;
