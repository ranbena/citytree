import styled from 'styled-components';
import BoxComponent from '../Box';
import NavComponent, { Anchor as AnchorComponent } from '../Navigation';

export const MainWrapper = styled.div`
  font-family: Assistant;
  color: #386b7e;
  font-size: 1.3rem;
  line-height: 1.5rem;

  h3 {
    font-weight: normal;
    font-size: 29px;
    letter-spacing: 2.9px;
    margin-bottom: 14px;
    color: #386b7e;
  }

  h4 {
    font-weight: normal;
    color: #386b7e;
    font-size: 1.5rem;
    letter-spacing: 2.4px;
    margin: 0;
    text-transform: uppercase;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.81rem;
    font-weight: 300;

    &:not(:last-child) {
      margin-bottom: 1.8rem;
    }
  }

  hr {
    border-color: #386b7e;
    margin: 2rem 0;
  }
`;

export const Navigation = styled(NavComponent).attrs({
  color: '#135049',
  navHeight: 70,
})``;

export const Anchor = styled(AnchorComponent).attrs({
  navHeight: 70,
})``;

export const Title = styled.h1`
  position: relative;
  font-weight: bold;
  font-size: 2.63rem;
  color: #135049;

  @media (max-width: 630px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h2`
  position: relative;
  font-weight: 300;
  font-size: 1.75rem;
  color: #386b7e;

  /* @media (max-width: 630px) {
    font-size: 2rem;
  } */
`;

export const Box = styled(BoxComponent)`
  ${Title} {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  font-family: Assistant;
  background-color: #c74c1c;
  color: white;
  font-size: 26px;
  font-weight: 500;
  min-width: 220px;
  height: 68px;
  text-align: center;
  line-height: 68px;
  border: 0;
  border-radius: 5px;
  padding: 0 20px;
  transition: background-color 150ms linear;

  &:hover {
    background-color: #c74c1c; // TODO
  }
`;
