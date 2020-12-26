import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'gatsby-plugin-intl';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import ogImage from 'src/images/og.png';
import favicon from 'src/images/favicon.ico';

import './styles.scss';

const siteUrl = process.env.GATSBY_SITE_URL;
const image = {
  path: ogImage,
  width: '765',
  height: '765',
};

const Layout: FC = ({ children }) => {
  const intl = useIntl();
  const dir = intl.formatMessage({ id: 'direction' });
  const title = intl.formatMessage({ id: 'meta.title' });
  const keywords = intl.formatMessage({ id: 'meta.keywords' });
  const description = intl.formatMessage({ id: 'meta.description' });
  const author = intl.formatMessage({ id: 'meta.author' });
  const siteName = intl.formatMessage({ id: 'citytree' });
  const locale = intl.formatMessage({ id: 'meta.locale' });

  return (
    <>
      <Helmet bodyAttributes={{ dir }}>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <link rel="shortcut icon" href={favicon} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content={locale} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:image" content={`${siteUrl}${image.path}`} />
        <meta property="og:image:width" content={image.width} />
        <meta property="og:image:height" content={image.height} />
      </Helmet>
      <div className="layout">
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
