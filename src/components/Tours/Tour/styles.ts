import styled from 'styled-components';
import HeroComponent from 'src/components/Hero';
import { breakpoints } from 'src/utils';

export const Hero = styled(HeroComponent)`
  padding: 0;

  // todo: change this to styled-components
  .leafContainer {
    padding: 50px 0;
  }
`;

export const ImageContainer = styled.div`
  --gap: 15px;
  display: grid;
  gap: var(--gap);
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;

  img {
    max-width: 100%;
    border-radius: 10px;
  }

  img:first-child {
    grid-column: 1 / 4;
  }

  @media ${breakpoints.lg} {
    --gap: 30px;
  }
`;
