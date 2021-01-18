import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import { Navigation, Anchor } from 'src/components/PracticalEcology/styles';
import Layout from 'src/components/Layout';
import {
  TopSection,
  Overview,
  MagicLink,
  Workshops,
  Investment,
  Times,
} from 'src/components/PracticalEcology';

import ogImageEn from 'src/assets/images/practical-ecology/og-en.jpeg';
import ogImageHe from 'src/assets/images/practical-ecology/og-he.jpeg';

const siteUrl = process.env.GATSBY_SITE_URL;

const Page: FC<PageProps> = () => {
  const { formatMessage, locale } = useIntl();
  const siteTitle = formatMessage({ id: 'practical-ecology.metatitle' });
  const siteDesc = formatMessage({ id: 'practical-ecology.subtitle' });
  const image = {
    path: locale === 'en' ? ogImageEn : ogImageHe,
    width: '1600',
    height: '800',
  };

  return (
    <Layout>
      <Helmet title={siteTitle}>
        <meta property="og:title" content={siteTitle} />
        <meta name="description" content={siteDesc} />
        <meta property="og:description" content={siteDesc} />
        <meta property="og:image" content={`${siteUrl}${image.path}`} />
        <meta property="og:image:width" content={image.width} />
        <meta property="og:image:height" content={image.height} />
      </Helmet>
      <TopSection />
      <Navigation>
        <a href="#overview">
          <FormattedMessage id="practical-ecology.nav.overview" />
        </a>
        <a href="#schedule">
          <FormattedMessage id="practical-ecology.nav.schedule" />
        </a>
        <a href="#pricing">
          <FormattedMessage id="practical-ecology.nav.pricing" />
        </a>
        <a href="#times">
          <FormattedMessage id="practical-ecology.nav.times" />
        </a>
      </Navigation>
      <Anchor id="overview" />
      <Overview />
      <MagicLink />
      <Anchor id="schedule" />
      <Workshops />
      <Anchor id="pricing" />
      <Investment />
      <Anchor id="times" />
      <Times />
    </Layout>
  );
};

export default Page;
