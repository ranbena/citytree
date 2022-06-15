import styled from 'styled-components';
import { Wrapper as Box } from '../Box/styles';

export const Wrapper = styled.div<{ boxColor?: string }>`
  background-size: cover;
  padding: 50px 0;
  min-height: 500px;
  position: relative;

  ${Box} {
    background-color: ${({ boxColor }) => boxColor};
  }
`;
