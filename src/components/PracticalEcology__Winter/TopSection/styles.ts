import styled from 'styled-components';
import ltrBgImage from 'src/assets/images/practical-ecology-winter/WinterMagic_upperBanner_02.png';
import { MainWrapper } from '../styles';

export const Wrapper = styled(MainWrapper)<{ $locale: string }>`
  height: 18vw;
  min-height: 130px;
  display: flex;
  align-items: center;
  color: white;
  background: url(${ltrBgImage}) center bottom;
  background-size: cover;
`;

export const Title = styled.div`
  margin-top: 2vw;
  line-height: max(27.9px, 4.3vw);
  font-size: max(25px, 3.25vw);
  letter-spacing: max(-0.75px, -0.125vw);
`;

export const SubTitle = styled.div`
  line-height: max(12px, 1.98vw);
  font-size: max(12px, 2.08vw);
  margin-top: max(9px, -0.22vw);
  font-weight: 300;
`;
