import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { PAGES } from 'src/constants';
import { LinkButton, Paragraph } from '../Box';
import Tour from './Tour';
import { BoxInner, ButtonWrapper, Title } from './styles';
import { ImageContainer } from './Tour/styles';

const Box: React.FC = () => (
  <BoxInner fullHeight color="#cfe5e3">
    <Title>
      <FormattedMessage id="tours.sessions.fullTitle" />
    </Title>
    <Paragraph grow intlId="tours.sessions.text" />
    <ButtonWrapper>
      <LinkButton href={PAGES.lecturesForm} target="_blank" bgcolor="#385958">
        <FormattedMessage id="tours.sessions.buttonLabel" />
      </LinkButton>
    </ButtonWrapper>
  </BoxInner>
);

const Images: React.FC = () => (
  <ImageContainer>
    <StaticImage
      src="../../assets/images/tours/Z06_0976.jpg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={720}
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_Tami_Workshop_07_Sq_.jpeg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={175}
      height={175}
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_Tami_Workshop_03_Sq_.jpeg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={175}
      height={175}
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_Tami_Workshop_01_Sq_.jpeg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={175}
      height={175}
    />
  </ImageContainer>
);

const Sessions: React.FC = () => (
  <Tour bgcolor="#385958" anchor="sessions" box={<Box />} images={<Images />} />
);

export default Sessions;
