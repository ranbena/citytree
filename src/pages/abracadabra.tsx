import React, { FC, useEffect, useState } from 'react';
import { PageProps, navigate } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useIntl } from 'gatsby-plugin-intl';

import ogImage from 'src/images/abracadabra/og.jpeg';
import Layout from 'src/components/Layout';
import Navigation, { Anchor } from 'src/components/Navigation';
import {
  TopSection,
  Overview,
  Investment,
  Learn,
  Details,
  Instructor,
  Assistant,
  GetInTouch,
} from '../components/AbraCadabra';

const siteUrl = process.env.GATSBY_SITE_URL;
const image = {
  path: ogImage,
  width: '1600',
  height: '800',
};

const Page: FC<PageProps> = () => {
  const intl = useIntl();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // redirect to en version
    // TODO: make this an HOC?
    if (intl.locale !== 'en') {
      navigate('/en/abracadabra');
    } else {
      setReady(true);
    }
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <Layout>
      <Helmet defer={false}>
        <title>CityTree | AbraCadabra</title>
        <meta property="og:title" content="CityTree | AbraCadabra" />
        <meta
          property="og:description"
          content="An 8-week course with CityTree on magic, deep ecology, and the rise of the feminine"
        />
        <meta property="og:image" content={`${siteUrl}${image.path}`} />
        <meta property="og:image:width" content={image.width} />
        <meta property="og:image:height" content={image.height} />
      </Helmet>
      <TopSection />
      <Navigation color="#223a39">
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
};

export default Page;
