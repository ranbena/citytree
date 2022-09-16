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
      <FormattedMessage id="tours.private.title" />
    </Title>
    <Paragraph
      grow
      intlId="tours.private.text"
      values={{
        a: (txt: string) => (
          <a href={PAGES.privateTourFormHebrew} target="_blank" rel="noreferrer noopener">
            {txt}
          </a>
        ),
      }}
    />
    <ButtonWrapper>
      <LinkButton href={PAGES.privateTourFormHebrew} target="_blank">
        <FormattedMessage id="tours.orderTour" />
      </LinkButton>
    </ButtonWrapper>
  </BoxInner>
);

const Images: React.FC = () => (
  <ImageContainer>
    <StaticImage
      src="../../assets/images/tours/Couple_garden.jpg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={720}
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_Dates_02_tami.jpg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={175}
      height={175}
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_OrangePeels_01_tami.jpg"
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

const PrivateTour: React.FC = () => (
  <Tour bgcolor="#595337" anchor="private" reverseLayout box={<Box />} images={<Images />} />
);

export default PrivateTour;
