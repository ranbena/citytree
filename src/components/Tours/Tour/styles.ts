import styled from 'styled-components';
import HeroComponent from 'src/components/Hero';
import { breakpoints } from 'src/utils';

export const Hero = styled(HeroComponent)`
  padding: 0;
  overflow: hidden;

  // todo: change this to styled-components
  .leafContainer {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const ImageContainer = styled.div`
  --gap: 15px;
  display: grid;
  gap: var(--gap);
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;

  & > * {
    max-width: 100%;
    border-radius: 10px;

    &:first-child {
      grid-column: 1 / 4;
    }
  }

  @media ${breakpoints.lg} {
    --gap: 30px;
  }
`;
