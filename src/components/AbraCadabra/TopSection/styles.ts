import styled from 'styled-components';
import { Container as BSContainer } from 'react-bootstrap';
import { MainWrapper } from '../styles';

export const Wrapper = styled(MainWrapper)`
  text-align: right;
  height: 290px;
  display: flex;
  align-items: center;
  font-size: 48px;
  color: #223a39;
  position: relative;
`;

export const Background = styled.div`
  display: flex;
  position: absolute;
  direction: rtl;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  pointer-events: none;
  flex-direction: row;
  justify-content: space-between;
`;

export const Container = styled(BSContainer)`
  margin-top: 20px;
`;

export const Title = styled.div`
  line-height: 45px;
`;

export const HebrewTitle = styled.span`
  font-family: adobe hebrew;
  margin-left: 10px;
  font-size: 60px;
  display: inline-block;

  @media (max-width: 630px) {
    margin-left: 0px;
  }
`;

export const EnglishTitle = styled.span`
  margin-right: 1px;
  font-size: 44px;
  letter-spacing: 5.4px;

  @media (max-width: 630px) {
    letter-spacing: unset;
    font-size: 40px;
  }
`;

export const SubTitle = styled.div`
  font-size: 20px;
  margin-top: 12px;
`;
