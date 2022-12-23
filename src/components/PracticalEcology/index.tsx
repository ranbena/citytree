import React from 'react';
import { PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useIntl } from 'gatsby-plugin-intl';
import Layout from 'src/components/Layout';
import { getAbsolutePath } from 'src/utils';

import ogImage from 'src/assets/images/workshops/og.jpg';
import Intro from './Intro';

const image = {
  path: getAbsolutePath(ogImage),
  width: '1920',
  height: '1280',
};

const Page: React.FC<PageProps> = () => {
  const intl = useIntl();
  const pageTitle = intl.formatMessage({ id: 'practical-ecology.metatitle' });
  const pageDesc = intl.formatMessage({ id: 'practical-ecology.metadesc' });

  return (
    <Layout>
      <Helmet title={pageTitle}>
        <meta property="og:title" content={pageTitle} />
        <meta name="description" content={pageDesc} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={image.path} />
        <meta property="og:image:width" content={image.width} />
        <meta property="og:image:height" content={image.height} />
      </Helmet>
      <Intro />
    </Layout>
  );
};

export default Page;
