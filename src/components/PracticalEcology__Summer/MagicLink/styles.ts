import styled from 'styled-components';
import { MainWrapper } from '../styles';

export const Wrapper = styled(MainWrapper)`
  text-align: center;
  padding: 105px 0 83px;

  h3 {
    color: #135049;

    span {
      display: inline-block;
    }
  }

  p {
    max-width: 820px;
    margin: 0 auto;
    color: #135049;
  }
`;
