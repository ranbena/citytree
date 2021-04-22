import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ color?: string; transparent?: boolean }>`
  ${({ transparent, color }) =>
    // eslint-disable-next-line operator-linebreak
    !transparent &&
    css`
      background: ${color || 'white'};
      border-radius: 20px;
      padding: 50px;
      height: 100%;

      @media (max-width: 768px) {
        padding: 50px 35px;
      }

      @media (max-width: 630px) {
        padding: 35px;
      }
    `}
`;
