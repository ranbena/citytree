import styled from 'styled-components';
import { Wrapper as Box } from '../Box/styles';

export const Wrapper = styled.div<{ boxColor?: string }>`
  background-size: cover;
  padding: 50px;
  min-height: 500px;

  ${Box} {
    background-color: ${({ boxColor }) => boxColor};
  }
`;
