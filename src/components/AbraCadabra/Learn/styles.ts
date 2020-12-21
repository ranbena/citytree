import styled from 'styled-components';
import { Container as BSContainer } from 'react-bootstrap';
import { MainWrapper, List as MainList } from '../styles';
import bgImage from '../../../images/abracadabra/learn.jpg';

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
