import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import Layout from 'src/components/Layout';
import ogImage from 'src/assets/images/abracadabra-he/og.jpg';
import { getAbsolutePath } from 'src/utils';
import TopSection from './TopSection';
import Overview from './Overview';
import Learn from './Learn';
import Investment from './Investment';
import Cohost from './Cohost';
import Host from './Host';
import Wheel from './Wheel';
import Contact from './Contact';
import Receive from './Receive';
import { Navigation, Anchor } from './styles';

const image = {
  path: ogImage,
  width: '1830',
  height: '1220',
};

const Page: FC<PageProps> = () => {
  const { formatMessage } = useIntl();
  const siteTitle = formatMessage({ id: 'abracadabra-he.metatitle' });
  const siteDesc = formatMessage({ id: 'abracadabra-he.metadesc' });

  return (
    <Layout>
      <Helmet title={siteTitle}>
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDesc} />
        <meta property="description" content={siteDesc} />
        <meta property="og:image" content={getAbsolutePath(image.path)} />
        <meta property="og:image:width" content={image.width} />
        <meta property="og:image:height" content={image.height} />
      </Helmet>
      <TopSection />
      <Navigation>
        <a href="#overview">
          <span>
            <FormattedMessage id="abracadabra-he.nav.overview" />
          </span>
        </a>
        <a href="#learn">
          <span>
            <FormattedMessage id="abracadabra-he.nav.learn" />
          </span>
        </a>
        <a href="#receive">
          <span>
            <FormattedMessage id="abracadabra-he.nav.receive" />
          </span>
        </a>
        <a href="#investment">
          <span>
            <FormattedMessage id="abracadabra-he.nav.investment" />
          </span>
        </a>
        <a
          href="https://docs.google.com/document/d/1FXW_Wekv2h4NufrYhCjA28oLwmGLgrqTDiGag88CCBY/preview"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>
            <FormattedMessage id="abracadabra-he.nav.sylabus" />
          </span>
        </a>
        <a href="#wheel">
          <span>
            <FormattedMessage id="abracadabra-he.nav.wheel" />
          </span>
        </a>
      </Navigation>
      <Anchor id="overview" />
      <Overview />
      <Anchor id="learn" />
      <Learn />
      <Anchor id="receive" />
      <Receive />
      <Anchor id="investment" />
      <Investment />
      <Host />
      <Cohost />
      <Anchor id="wheel" />
      <Wheel />
      <Contact />
    </Layout>
  );
};

export default Page;
