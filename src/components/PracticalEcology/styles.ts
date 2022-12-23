import styled from 'styled-components';
import { BoxInner as BoxInnerComponent, LinkButton } from 'src/components/Box';
import { Paragraph } from '../Box/styles';

export const Title = styled.h1``;

export const BoxInner = styled(BoxInnerComponent)`
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
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.9);
  }

  ${Paragraph} {
    text-align: justify;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
