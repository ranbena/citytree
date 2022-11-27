import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import { Navigation, Anchor, SummerAnchor } from 'src/components/PracticalEcology__Winter/styles';
import Layout from 'src/components/Layout';
import { getAbsolutePath } from 'src/utils';
import ogImageHe from 'src/assets/images/practical-ecology-winter/og-he.jpeg';
import TopSection from './TopSection';
import Overview from './Overview';
import Workshops from './Workshops';
import Investment from './Investment';
import Summer from './Summer';
import Times from './Times';

const image = {
  path: ogImageHe,
  width: '1600',
  height: '800',
};

const Page: FC<PageProps> = () => {
  const { formatMessage } = useIntl();
  const siteTitle = formatMessage({ id: 'practical-ecology-winter.metatitle' });
  const siteDesc = formatMessage({ id: 'practical-ecology-winter.subtitle' });

  return (
    <Layout>
      <Helmet title={siteTitle}>
        <meta property="og:title" content={siteTitle} />
        <meta name="description" content={siteDesc} />
        <meta property="og:description" content={siteDesc} />
        <meta property="og:image" content={getAbsolutePath(image.path)} />
        <meta property="og:image:width" content={image.width} />
        <meta property="og:image:height" content={image.height} />
      </Helmet>
      <TopSection />
      <Navigation>
        <a href="#overview">
          <span>
            <FormattedMessage id="practical-ecology-winter.nav.overview" />
          </span>
        </a>
        <a href="#pricing">
          <span>
            <FormattedMessage id="practical-ecology-winter.nav.pricing" />
          </span>
        </a>
        <a href="#schedule">
          <span>
            <FormattedMessage id="practical-ecology-winter.nav.schedule" />
          </span>
        </a>
        <a href="#times">
          <span>
            <FormattedMessage id="practical-ecology-winter.nav.times" />
          </span>
        </a>
        <SummerAnchor href="#summer">
          <span>
            <FormattedMessage id="practical-ecology-winter.nav.summer" />
          </span>
        </SummerAnchor>
      </Navigation>
      <Anchor id="overview" />
      <Overview />
      <Anchor id="pricing" />
      <Investment />
      <Anchor id="schedule" />
      <Workshops />
      <Anchor id="times" />
      <Times />
      <Anchor id="summer" />
      <Summer />
    </Layout>
  );
};

export default Page;
