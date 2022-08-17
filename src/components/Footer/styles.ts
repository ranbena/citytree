import styled from 'styled-components';
import { breakpoints } from '../../utils';

export const Wrapper = styled.footer`
  background-color: #2c410f;
  color: #dadfcc;
  overflow: hidden;

  .container {
    padding: 25px 0;
  }

  a {
    color: #dadfcc;
    font-size: 16px;

    &:hover {
      opacity: 0.75;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  white-space: nowrap;
  gap: 15px;

  @media ${breakpoints.sm} {
    flex-direction: column-reverse;

    & > * {
      justify-content: center;
      text-align: center;
    }
  }
`;

export const Logo = styled.img`
  height: 45px;
  filter: brightness(100);
  opacity: 0.8;
  margin-left: 30px;
  margin-top: 2px;

  @media ${breakpoints.md} {
    display: none;
  }
`;

export const Info = styled.div`
  font-size: 16px;
  display: flex;
  align-items: top;
`;

export const Social = styled.div`
  margin: 10px 0;
  display: flex;
  flex: 1;
  justify-content: center;

  a {
    margin: 0 10px;
    background: #dadfcc;
    color: #2c410f;
    border-radius: 5px;
    height: 35px;
    width: 35px;
    padding: 4px;
  }

  a:hover {
    opacity: 0.85;
  }

  svg {
    height: auto;
    width: 100%;
  }

  a.facebook {
    padding: 6px 3px 0 3px;
  }
`;
