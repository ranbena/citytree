import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Header,
  Footer,
  TopSection,
  MoreSection,
  DonateSection,
  // Shop,
  OurStory,
  OurVision,
} from '../components';
import { meta } from '../constants';
import '../scss/index.scss';

const Home: React.FC<{}> = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{meta.title}</title>
      <link rel="canonical" href={meta.siteUrl} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="description" content={meta.description} />
      <meta name="author" content={meta.author} />
      <link rel="shortcut icon" href={meta.favicon} />
      <meta property="og:locale" content="he_IL" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.siteUrl} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:image" content={meta.image.path} />
      <meta property="og:image:width" content={meta.image.width} />
      <meta property="og:image:height" content={meta.image.height} />
    </Helmet>
    <Header />
    <TopSection />
    <MoreSection />
    <DonateSection />
    {/* <Shop /> */}
    <OurStory />
    <OurVision />
    <Footer />
  </>
);

export default Home;
