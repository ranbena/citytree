import styled from 'styled-components';
import ltrBgImage from 'src/assets/images/practical-ecology-summer/top-banner.jpg';
import { MainWrapper } from '../styles';

export const Wrapper = styled(MainWrapper)<{ $locale: string }>`
  height: 20.3vw;
  min-height: 130px;
  display: flex;
  align-items: center;
  color: #386b7e;
  background: url(${ltrBgImage}) right center;
  background-size: cover;
`;

export const Title = styled.div`
  line-height: max(27.9px, 4.6vw);
  font-size: max(30px, 4.95vw);
  font-weight: bold;
  letter-spacing: max(-0.75px, -0.125vw);
  margin-top: max(6.6px, 1.1vw);
  text-shadow: 0 0 8px white, 0 0 8px white; // for readabilty when bg image underlays text
`;

export const SubTitle = styled.div`
  line-height: max(12px, 1.98vw);
  font-size: max(12px, 1.98vw);
  margin-top: max(9px, -0.22vw);
  font-weight: 300;
  text-shadow: 0 0 8px white, 0 0 8px white; // for readabilty when bg image underlays text
`;
