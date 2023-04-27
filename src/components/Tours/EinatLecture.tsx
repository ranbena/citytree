import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { PAGES } from 'src/constants';
import { LinkButton, Paragraph } from '../Box';
import Tour from './Tour';
import { BoxInner, ButtonWrapper, Title } from './styles';
import { ImageContainer } from './Tour/styles';

const Box: React.FC = () => (
  <BoxInner fullHeight color="#fffcf0">
    <Title>
      <FormattedMessage id="tours.einat.title" />
    </Title>
    <Paragraph grow intlId="tours.einat.text" />
    <ButtonWrapper>
      <LinkButton href={PAGES.lecturesForm} target="_blank" bgcolor="#595337">
        <FormattedMessage id="tours.einat.buttonLabel" />
      </LinkButton>
    </ButtonWrapper>
  </BoxInner>
);

const Images: React.FC = () => (
  <ImageContainer>
    <StaticImage
      src="../../assets/images/tours/CityTree_EinatWrites_02_tami.jpeg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={720}
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_BigTree_02_Tami.jpeg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={175}
      height={175}
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_Soil_06_tami.jpeg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={175}
      height={175}
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_harissa_Tami.jpg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={175}
      height={175}
    />
  </ImageContainer>
);

const EinatLecture: React.FC = () => (
  <Tour bgcolor="#595337" anchor="einat" reverseLayout box={<Box />} images={<Images />} />
);

export default EinatLecture;
