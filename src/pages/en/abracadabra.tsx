import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';

import ogImage from 'src/assets/images/abracadabra-en/og.jpeg';
import Layout from 'src/components/Layout';
import { getAbsolutePath } from 'src/utils';
import { Navigation, Anchor } from 'src/components/AbraCadabra_en/styles';
import {
  TopSection,
  Overview,
  Investment,
  Learn,
  Details,
  Instructor,
  Assistant,
  GetInTouch,
} from 'src/components/AbraCadabra_en';

const image = {
  path: ogImage,
  width: '1600',
  height: '800',
};

const siteTitle = 'ABRACADABRA : אברא כדברא';

const siteDesc =
  'An 8-week course with CityTree on magic, deep ecology, and the rise of the feminine';

const Page: FC<PageProps> = () => (
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
      <a href="#overview">Overview</a>
      <a href="#investment">Investment</a>
      <a href="#details">The Details</a>
      <a href="#instructor">Instructor</a>
    </Navigation>
    <Anchor id="overview" />
    <Overview />
    <Anchor id="investment" />
    <Investment />
    <Learn />
    <Anchor id="details" />
    <Details />
    <Anchor id="instructor" />
    <Instructor />
    <Assistant />
    <GetInTouch />
  </Layout>
);

export default Page;
