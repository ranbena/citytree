import styled from 'styled-components';
import { Container as BSContainer } from 'react-bootstrap';
import overviewImage from 'src/assets/images/abracadabra-he/Abra_MainPic.jpg';
import { MainWrapper, Box as MainBox } from '../styles';

export const Wrapper = styled(MainWrapper)`
  background: #ced1d4 url(${overviewImage}) no-repeat right top;
  background-size: auto 100%;

  direction: ltr; // in He, the direction switch doesn't work with the image
`;

export const Container = styled(BSContainer)`
  padding: 116px 0;
`;

export const Box = styled(MainBox)`
  body[dir='rtl'] & {
    direction: rtl;
  }
`;

export const BottomPart = styled.div`
  p {
    margin: 30px 0;
    font-weight: 500;

    strong {
      font-size: 22px;
      font-weight: 600;
    }
  }
`;
