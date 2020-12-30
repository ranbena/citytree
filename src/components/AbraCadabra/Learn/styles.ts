import styled from 'styled-components';
import { Container as BSContainer } from 'react-bootstrap';
import bgImage from 'src/assets/images/abracadabra/learn.jpg';
import { MainWrapper, List as MainList } from '../styles';

export const Wrapper = styled(MainWrapper)`
  background: #d5dec5 url(${bgImage});
  background-size: cover;
`;

export const Container = styled(BSContainer)`
  padding: 80px 0;
`;

export const List = styled(MainList).attrs({
  color: '#687f3f',
})`
  margin: 40px 0;
`;
