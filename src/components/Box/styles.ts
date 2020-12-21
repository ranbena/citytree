import styled from 'styled-components';

export const Wrapper = styled.div<{ color?: string }>`
  background: ${({ color }) => color || 'white'};
  border-radius: 10px;
  padding: 70px;
  height: 100%;

  @media (max-width: 768px) {
    padding: 50px 35px;
  }

  @media (max-width: 630px) {
    padding: 35px;
  }
`;
