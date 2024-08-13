import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
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
  const siteTitle = 'עץבעיר - קורס כישוף ואקולוגיה עמוקה';
  const siteDesc = 'תיאוריה ופרקטיקה של השבת הקסם אל חיינו - 8 שיעורי בסיס';

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
          <span>שובה של האלה?</span>
        </a>
        <a href="#learn">
          <span>מה לומדות</span>
        </a>
        <a href="#receive">
          <span>מה מקבלות</span>
        </a>
        <a href="#investment">
          <span>מחיר הקורס</span>
        </a>
        <a
          href="https://docs.google.com/document/d/1FXW_Wekv2h4NufrYhCjA28oLwmGLgrqTDiGag88CCBY/preview"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>סילבוס</span>
        </a>
        <a href="#wheel">
          <span>הגלגל</span>
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
