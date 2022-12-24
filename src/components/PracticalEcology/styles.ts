import styled, { css } from 'styled-components';
import { BoxInner as BoxInnerComponent, LinkButton } from 'src/components/Box';
import { StyledSessions } from './Package/styles';

export const Title = styled.h1``;

export const BoxInner = styled(BoxInnerComponent)<{ textColor?: string }>`
  strong {
    display: block;
    text-align: start;
  }

  ${LinkButton} {
    font-size: 20px;
    height: 35px;
    line-height: 35px;
    width: auto;
    padding: 0 30px;
    color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
  }

  &,
  ${StyledSessions}, ${StyledSessions} a {
    ${({ textColor }) =>
      textColor &&
      css`
        color: ${textColor};
      `}
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const Paragraph = styled.p`
  text-align: justify;
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 13px;
`;
