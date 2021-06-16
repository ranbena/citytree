import styled from 'styled-components';
import bgImage from 'src/assets/images/abracadabra-he/Abra_TopBanner.jpg';
import { MainWrapper } from '../styles';

export const Wrapper = styled(MainWrapper)<{ $locale: string }>`
  height: 15vw;
  min-height: 170px;
  display: flex;
  align-items: flex-end;
  padding-bottom: 40px;
  color: white;
  background: url(${bgImage}) center bottom;
  background-size: cover;
`;

export const Title = styled.div`
  color: #ffc7ff;

  strong {
    font-family: Frank Ruhl Libre;
    font-size: 40pt;
    font-weight: 500;
    margin-left: 15px;
  }

  span {
    display: inline-block;
    font-size: 16pt;
  }
`;

export const SubTitle = styled.div`
  margin-top: 20px;
  font-size: 14pt;
  color: #e4ebc2;
  font-weight: 300;
`;
