import styled, { css } from 'styled-components';
import { Container as BSContainer } from 'react-bootstrap';
import overviewImage from 'src/assets/images/abracadabra-he/Abra_sylabus_05.jpg';
import { MainWrapper, Box as MainBox, Title as MainTitle } from '../styles';
import { BoxInner } from '../../Box';
import { breakpoints } from '../../../utils';

export const Wrapper = styled(MainWrapper)`
  background: url(${overviewImage});
  background-size: cover;
  background-position: center;
`;

export const Container = styled(BSContainer)`
  padding: 70px 0;
`;

export const Title = styled(MainTitle)`
  /* color: #ffe8f0; */
`;

const greenBoxStyle = css`
  background-color: #1c2d049f;

  ${Title}, li {
    color: #cff3e6;
  }
`;

export const Box = styled(MainBox)<{ $green?: boolean }>`
  direction: rtl;

  ${BoxInner} {
    padding: 50px 40px;
    ${(p) => (p.$green ? greenBoxStyle : null)};
  }

  ${Title}:nth-of-type(2) {
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    position: relative;
    padding-right: 60px;
    margin-bottom: 10px;
    margin-right: 10px;
    line-height: 26px;
  }

  li:before {
    content: '★';
    font-size: 18px;
    position: absolute;
    right: 0;
    top: 2px;
  }
`;

export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  margin-bottom: 40px;

  @media ${breakpoints.lg} {
    grid-template-columns: 1fr;
  }
`;
