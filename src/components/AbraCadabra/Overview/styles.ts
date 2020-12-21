import styled from 'styled-components';
import { Container as BSContainer } from 'react-bootstrap';
import { MainWrapper } from '../styles';
import overviewImage from '../../../images/abracadabra/overview.jpeg';

export const Wrapper = styled(MainWrapper)`
  border-bottom: 10px solid #003535;
  background: #d5dec5 url(${overviewImage}) no-repeat right top;
  background-size: auto 100%;
`;

export const Container = styled(BSContainer)`
  padding: 80px 0;
`;
