import styled from 'styled-components';
import HeroComponent from 'src/components/Hero';

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
    background: white;
    border-radius: 10px;
    overflow: hidden;

    &:first-child {
      grid-column: 1 / 4;
    }
  }
`;

export const ThumbItem = styled.div`
  .gatsby-image-wrapper {
    min-width: 100%;

    &:hover {
      opacity: 0.9;
      cursor: pointer;
    }
  }
`;

export const LightboxItem = styled.div`
  .gatsby-image-wrapper {
    max-width: 100%;
    max-height: 100%;
  }
`;
