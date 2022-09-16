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
      <FormattedMessage id="tours.magic.fullTitle" />
    </Title>
    <Paragraph grow intlId="tours.magic.text" />
    <ButtonWrapper>
      <LinkButton href={PAGES.magicTourFormHebrew} target="_blank" bgcolor="#385958">
        <FormattedMessage id="tours.magic.buttonLabel" />
      </LinkButton>
    </ButtonWrapper>
  </BoxInner>
);

const Images: React.FC = () => (
  <ImageContainer>
    <StaticImage
      src="../../assets/images/tours/CityTree_TamiWitch_01_Inbal.jpg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={720}
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_Sage_tami.jpg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={175}
      height={175}
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_Art_01_tami.jpg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={175}
      height={175}
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_Tinkture_01_tami.jpg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={175}
      height={175}
    />
  </ImageContainer>
);

const MagicTour: React.FC = () => (
  <Tour bgcolor="#385958" anchor="magic" reverseLayout box={<Box />} images={<Images />} />
);

export default MagicTour;
