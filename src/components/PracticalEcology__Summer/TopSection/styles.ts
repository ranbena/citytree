import styled from 'styled-components';
import ltrBgImage from 'src/assets/images/practical-ecology-summer/SummerMagic_TopBanner.png';
import { MainWrapper } from '../styles';

export const Wrapper = styled(MainWrapper)<{ $locale: string }>`
  height: 20.3vw;
  min-height: 130px;
  display: flex;
  align-items: center;
  color: #4a251d;
  background: url(${ltrBgImage}) center bottom;
  background-size: cover;
`;

export const Title = styled.div`
  line-height: max(27.9px, 4.3vw);
  font-size: max(25px, 3.25vw);
  font-weight: bold;
  letter-spacing: max(-0.75px, -0.125vw);
  margin-top: max(70px, 9.1vw);
  text-shadow: 0 0 8px #c4f2feff, 0 0 8px #c4f2feff; // for readabilty when bg image underlays text
`;

export const SubTitle = styled.div`
  line-height: max(12px, 1.98vw);
  font-size: max(12px, 2.08vw);
  margin-top: max(9px, -0.22vw);
  font-weight: 300;
  text-shadow: 0 0 8px #c4f2feff, 0 0 8px #c4f2feff; // for readabilty when bg image underlays text
`;
