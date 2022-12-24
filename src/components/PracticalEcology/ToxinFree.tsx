import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { PAGES } from 'src/constants';
import { LinkButton } from '../Box';
import { BoxInner, ButtonWrapper, Title, Paragraph } from './styles';
import Package, { Sessions } from './Package';
import { ImageContainer, Spacer } from './Package/styles';

const sessions = ['vinegar', 'candles', 'toilet-paper', 'spray', 'laundry', 'peels'];

const Box: React.FC = () => (
  <BoxInner fullHeight color="#cfedfed9" textColor="#120e34">
    <Title>
      <FormattedMessage id="practical-ecology.packs.toxin-free.title" />
    </Title>

    <Paragraph>
      <FormattedMessage id="practical-ecology.packs.toxin-free.desc.0" />
    </Paragraph>
    <Paragraph>
      <FormattedMessage id="practical-ecology.packs.toxin-free.desc.1" />
    </Paragraph>
    <Paragraph>
      <FormattedMessage id="practical-ecology.packs.toxin-free.desc.2" />
    </Paragraph>
    <Spacer />
    <Paragraph>
      <FormattedMessage id="practical-ecology.packs.toxin-free.desc.3" />
    </Paragraph>
    <Spacer />
    <Paragraph>
      <Sessions ids={sessions} />
    </Paragraph>
    <Spacer />
    <Paragraph>
      <FormattedMessage
        id="practical-ecology.single-price"
        values={{ price: 20, b: (txt: string) => <b>{txt}</b> }}
      />
    </Paragraph>
    <Paragraph>
      <FormattedMessage
        id="practical-ecology.pack-price"
        values={{ price: 80, b: (txt: string) => <b>{txt}</b> }}
      />
    </Paragraph>
    <ButtonWrapper>
      <LinkButton href={PAGES.forageTourFormHebrew} target="_blank" bgcolor="#10394a">
        <FormattedMessage id="practical-ecology.purchase" />
      </LinkButton>
    </ButtonWrapper>
  </BoxInner>
);

const Images: React.FC = () => (
  <ImageContainer>
    <StaticImage
      src="../../assets/images/tours/CityTree_ForageTour_02_Einat.jpg"
      alt=""
      width={720}
      placeholder="none"
      loading="lazy"
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_Hibiscus_01_tami.jpg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={175}
      height={175}
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_Forage_01_tami.jpg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={175}
      height={175}
    />
    <StaticImage
      src="../../assets/images/tours/CityTree_GreenIcecream_01_tami.jpg"
      alt=""
      placeholder="none"
      loading="lazy"
      width={175}
      height={175}
    />
  </ImageContainer>
);

const ToxinFree: React.FC = () => <Package bgcolor="#375159" box={<Box />} images={<Images />} />;

export default ToxinFree;
