import styled, { css } from 'styled-components';

export const Title = styled.div`
  font-size: 26px;
  font-weight: bold;
`;

export const Paragraph = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Wrapper = styled.div<{
  color?: string;
  transparent?: boolean;
  size?: 'small' | 'big';
}>`
  ${({ transparent, color }) =>
    // eslint-disable-next-line operator-linebreak
    !transparent &&
    css`
      background: ${color || 'white'};
      border-radius: 15px;
      padding: 30px;
      height: 100%;

      @media (max-width: 768px) {
        padding: 30px 35px;
      }
    `}

  ${({ size }) =>
    // eslint-disable-next-line operator-linebreak
    size === 'small' &&
    css`
      padding: 20px 30px;
      text-align: center;

      ${Title} {
        font-size: 18px;
        margin-bottom: 5px;
      }
    `}
`;
