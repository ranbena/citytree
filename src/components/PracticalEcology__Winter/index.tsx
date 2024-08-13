import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
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
  const siteTitle = 'עץבעיר | סדרת סדנאות החורף של השיבה הביתה';
  const siteDesc = '18 שיעורי זום מוקלטים באקולוגיה מעשית, חורף 2020-21';

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
          <span>ברוכות השבות הביתה</span>
        </a>
        <a href="#pricing">
          <span>לרכישה</span>
        </a>
        <a href="#schedule">
          <span>רשימת סדנאות החורף</span>
        </a>
        <a href="#times">
          <span>גלגל השנה של עץבעיר</span>
        </a>
        <SummerAnchor href="#summer">
          <span>לסדנאות הקיץ</span>
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
