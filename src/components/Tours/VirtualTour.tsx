import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { tamiPhoneLink, einatPhoneLink, PAGES, whatsappUrl } from 'src/constants';
import { LinkButton, Paragraph } from '../Box';
import { BoxInner, ButtonWrapper, Title } from './styles';
import Tour from './Tour';
import { ImageContainer } from './Tour/styles';

const Box: React.FC = () => (
  <BoxInner fullHeight color="#fff5f1">
    <Title>
      <FormattedMessage id="tours.virtual.title" />
    </Title>
    <Paragraph
      grow
      intlId="tours.virtual.text"
      values={{
        einatPhoneLink,
        tamiPhoneLink,
        whatsapp: (txt: string) => <a href={whatsappUrl}>{txt}</a>,
      }}
    />
    <ButtonWrapper>
      <LinkButton href={PAGES.lecturesForm} target="_blank" bgcolor="#4a3b35">
        <FormattedMessage id="tours.orderLecture" />
      </LinkButton>
    </ButtonWrapper>
  </BoxInner>
);

const Images: React.FC = () => (
  <ImageContainer>
    <StaticImage
      src="../../assets/images/tours/CityTre_VisitTheTree_01_tami.jpg"
      alt=""
      width={720}
      placeholder="none"
      loading="lazy"
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_BialikCircle_Liana.jpg"
      alt=""
      width={175}
      height={175}
      placeholder="none"
      loading="lazy"
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_Batata_01_tami.jpeg"
      alt=""
      width={175}
      height={175}
      placeholder="none"
      loading="lazy"
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_AlonAviKabucha_01_Tami.jpeg"
      alt=""
      width={175}
      height={175}
      placeholder="none"
      loading="lazy"
    />
  </ImageContainer>
);

const VirtualTour: React.FC = () => (
  <Tour bgcolor="#4a3b35" anchor="virtual" box={<Box />} images={<Images />} reverseLayout />
);

export default VirtualTour;
