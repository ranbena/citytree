import styled, { css } from 'styled-components';

export const Title = styled.div`
  font-size: 26px;
  font-weight: bold;
  line-height: 26px;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p<{
  weight?: number;
  stretch?: boolean;
  reverseUnderline?: boolean;
  grow?: boolean;
}>`
  font-size: 17px;
  margin-bottom: 10px;

  ${({ grow }) =>
    grow &&
    css`
      flex-grow: 1;
    `}

  ${({ reverseUnderline }) => css`
    a {
      text-decoration: ${reverseUnderline ? 'none' : 'underline'};

      &:hover {
        text-decoration: ${reverseUnderline ? 'underline' : 'none'};
      }
    }
  `}

  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight};
    `}

  ${({ stretch }) =>
    stretch &&
    css`
      flex-grow: 1;
    `}
`;

const ButtonStyle = css`
  border: none;
  background-color: #424234;
  color: #c6d1be;
  width: 100%;
  max-width: 300px;
  font-size: 16px;
  border-radius: 2px;
  height: 26px;
  line-height: 24px;

  transition-property: background-color, color;
  transition-duration: 0.2s;

  &:hover {
    color: white;
  }

  &:active {
    color: white;
    background-color: #454530;
    transform: translateY(1px);
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button.attrs(() => ({ className: 'box-button' }))`
  ${ButtonStyle};
`;

export const LinkButton = styled.a.attrs(() => ({ className: 'box-button' }))`
  ${ButtonStyle};
  display: inline-block;
  text-align: center;

  &:hover {
    text-decoration: none;
  }
`;

export const Wrapper = styled.div<{
  color?: string;
  transparent?: boolean;
  size?: 'small' | 'big';
  center?: boolean;
  fullHeight?: boolean;
}>`
  display: flex;
  flex-direction: column;

  ${({ transparent, color }) =>
    // eslint-disable-next-line operator-linebreak
    !transparent &&
    css`
      background: ${color || 'white'};
      border-radius: 15px;
      padding: 30px;

      @media (max-width: 768px) {
        padding: 30px 35px;
      }
    `}

  ${({ fullHeight }) =>
    // eslint-disable-next-line operator-linebreak
    fullHeight &&
    css`
      height: 100%;
    `}

  ${({ size }) =>
    // eslint-disable-next-line operator-linebreak
    size === 'small' &&
    css`
      padding: 20px 30px;

      ${Title} {
        font-size: 18px;
        margin-bottom: 5px;
      }

      body[dir='ltr'] & {
        padding: 20px 18px;
      }
    `}

  ${({ center }) =>
    // eslint-disable-next-line operator-linebreak
    center &&
    css`
      text-align: center;
    `}
`;
