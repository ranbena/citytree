import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from 'src/components/Layout';
import ogImageHe from 'src/assets/images/practical-ecology-summer/og-he.jpg';
import { getAbsolutePath } from 'src/utils';
import { Navigation, Anchor, WinterAnchor } from 'src/components/PracticalEcology__Summer/styles';
import TopSection from './TopSection';
import Overview from './Overview';
import MagicLink from './MagicLink';
import Workshops from './Workshops';
import Investment from './Investment';
import Winter from './Winter';
import Times from './Times';

const image = {
  path: ogImageHe,
  width: '1920',
  height: '1280',
};

const Page: FC<PageProps> = () => {
  const siteTitle = 'עץבעיר - סדנאות באקולוגיה מעשית';
  const siteDesc = 'קומפוסט וגינון, ריפוי DIY, נקיון אקולוגי של הבית והגוף ועוד';

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
        <a href="#overview">ברוכות השבות הביתה</a>
        <a href="#schedule">תכניית הסדנאות</a>
        <a href="#pricing">מחיר הסדרה</a>
        <a href="#times">גלגל השנה של עץבעיר</a>
        <WinterAnchor href="#winter">סדנאות החורף</WinterAnchor>
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
      <Anchor id="winter" />
      <Winter />
    </Layout>
  );
};

export default Page;
