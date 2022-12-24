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

    &:first-child {
      grid-column: 1 / 4;
    }

    img {
      border-radius: 10px;
    }
  }
`;

export const SessionLink = styled.a`
  text-decoration: underline;
  display: inline;

  &:hover {
    text-decoration: none;
  }
`;

export const StyledSessions = styled.span`
  line-height: 32px;
`;

export const Spacer = styled.div`
  height: 13px;
`;
