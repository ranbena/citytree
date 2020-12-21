import styled from 'styled-components';
import { Container as BSContainer } from 'react-bootstrap';
import { MainWrapper, Box, Title } from '../styles';
import { BoxInner } from '../../Box';
import image from '../../../images/abracadabra/liana.png';

export const Wrapper = styled(MainWrapper)`
  background-color: #d6dec6;

  ${Box} {
    padding: 0;

    ${BoxInner} {
      padding: 40px;
    }
  }

  ${Title} {
    margin-bottom: 2rem;
  }
`;

export const Container = styled(BSContainer)`
  background: url(${image}) no-repeat left;
  background-size: auto 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 53px;
  padding-bottom: 53px;

  @media (min-width: 991px) {
    max-width: 1397px; // allows the photo to stick to the left
  }

  @media (max-width: 991px) {
    background-image: none;
  }
`;
