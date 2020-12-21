import styled from 'styled-components';
import { Container as BSContainer } from 'react-bootstrap';
import { MainWrapper } from '../styles';
import image from '../../../images/abracadabra/tami.jpeg';

export const Wrapper = styled(MainWrapper)`
  border-bottom: 10px solid #003535;
  background: #344c49 url(${image}) no-repeat center;
  background-size: auto 100%;
`;

export const Container = styled(BSContainer)`
  padding: 80px 0;
`;
