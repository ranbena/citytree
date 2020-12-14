import styled from 'styled-components';
import LinkIcon from 'src/assets/images/link.svg';
import { breakpoints } from '../../utils';

export const Wrapper = styled.footer`
  background-color: #809336;
  padding: 30px 0;
  color: white;

  a {
    color: white;
    font-size: 16px;

    &:hover {
      opacity: 0.75;
    }
  }

  @media ${breakpoints.sm} {
    .d-flex {
      flex-direction: column;
    }
  }
`;

export const Logo = styled.img`
  height: 100px;

  @media ${breakpoints.md} {
    display: none;
  }
`;

export const Info = styled.div`
  font-size: 16px;

  @media ${breakpoints.sm} {
    text-align: center;
    margin-bottom: 15px;
  }
`;

export const Social = styled.div`
  margin: 10px -3px;
  display: flex;

  a {
    margin: 0 3px;
  }

  a:hover {
    opacity: 0.85;
  }

  img {
    height: 35px;
    width: 35px;
  }

  @media ${breakpoints.sm} {
    justify-content: center;
  }
`;

export const Link = styled.a`
  &:before {
    content: '';
    width: 10px;
    height: 10px;
    background: url(${LinkIcon});
    background-size: cover;
    display: inline-block;
    margin: 0 5px;
  }
`;
