import styled from 'styled-components';
import bgImage from 'src/assets/images/practical-ecology-summer/SummerMagic_MiddleBanner.png';
import { MainWrapper } from '../styles';

export const Wrapper = styled(MainWrapper)`
  text-align: center;
  padding: 105px 0 83px;
  background-image: url(${bgImage});
  background-size: cover;

  h3 {
    color: #4a251d;

    span {
      display: inline-block;
    }
  }

  p {
    max-width: 860px;
    margin: 0 auto;
    color: #4a251d;
    font-size: 31px;
    line-height: 29px;
  }
`;
