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

const Page: FC<PageProps> = () => {
  const { formatMessage } = useIntl();

  return (
    <Layout>
      <Helmet>
        <title>{formatMessage({ id: 'practical-ecology.metatitle' })}</title>
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
