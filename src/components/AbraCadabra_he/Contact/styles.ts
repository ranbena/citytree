import styled from 'styled-components';
import bgImage from 'src/assets/images/abracadabra-he/Abra_Contact_Pic.jpg';

import { MainWrapper, Title as MainTitle, Button } from '../styles';

export const Wrapper = styled(MainWrapper)`
  text-align: center;
  box-sizing: content-box;
  color: #3d1a62;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  padding: 70px 20px;
  font-size: 22pt;

  p {
    margin: 30px auto !important;
    font-size: 22pt;
  }

  a {
    color: #3d1a62;
  }

  ${Button} {
    margin-top: 20px;
  }
`;

export const Title = styled(MainTitle)``;
