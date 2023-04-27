import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { PAGES } from 'src/constants';
import { LinkButton, Paragraph } from '../Box';
import { BoxInner, ButtonWrapper, Title } from './styles';
import Tour from './Tour';
import { ImageContainer } from './Tour/styles';

const Box: React.FC = () => (
  <BoxInner fullHeight color="#cfe5e3">
    <Title>
      <FormattedMessage id="tours.tami.title" />
    </Title>
    <Paragraph grow intlId="tours.tami.text" />
    <ButtonWrapper>
      <LinkButton href={PAGES.lecturesForm} target="_blank" bgcolor="#385958">
        <FormattedMessage id="tours.tami.buttonLabel" />
      </LinkButton>
    </ButtonWrapper>
  </BoxInner>
);

const Images: React.FC = () => (
  <ImageContainer>
    <StaticImage
      src="../../assets/images/tours/CityTree_Tami_Lecture_01_B_.jpeg"
      alt=""
      width={720}
      placeholder="none"
      loading="lazy"
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_Tami_Lecture_06_Sq_.jpeg"
      alt=""
      width={175}
      height={175}
      placeholder="none"
      loading="lazy"
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_Tami_Lecture_05_Sq_.jpeg"
      alt=""
      width={175}
      height={175}
      placeholder="none"
      loading="lazy"
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_Tami_Lecture_01_Sq_.jpeg"
      alt=""
      width={175}
      height={175}
      placeholder="none"
      loading="lazy"
    />
  </ImageContainer>
);

const TamiLecture: React.FC = () => (
  <Tour bgcolor="#385958" anchor="tami" box={<Box />} images={<Images />} reverseLayout />
);

export default TamiLecture;
