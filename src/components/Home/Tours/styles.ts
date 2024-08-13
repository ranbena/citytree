import styled from 'styled-components';
import { Title as BoxTitle } from 'src/components/Box';

export const Title = styled(BoxTitle)`
  font-size: 25px !important;
  margin-bottom: 20px !important;

  .side-column & {
    font-size: 20px !important;
    margin-bottom: 5px !important;
  }
`;
