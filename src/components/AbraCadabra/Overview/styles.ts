import styled from 'styled-components';
import { Container as BSContainer } from 'react-bootstrap';
import overviewImage from 'src/assets/images/abracadabra/overview.jpeg';
import { MainWrapper } from '../styles';

export const Wrapper = styled(MainWrapper)`
  border-bottom: 10px solid #003535;
  background: #d5dec5 url(${overviewImage}) no-repeat right top;
  background-size: auto 100%;
`;

export const Container = styled(BSContainer)`
  padding: 80px 0;
`;
