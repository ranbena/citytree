import React, { FC, PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'gatsby-plugin-intl';
import { Header, Footer } from '..';
import { meta } from '../../constants';

import './styles.scss';

const pathPrefix = process.env.GATSBY_PATH_PREFIX || '';
const cannonicalUrl = `${meta.siteUrl}${pathPrefix}`;

export const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  const intl = useIntl();
  const dir = intl.formatMessage({ id: 'direction' });

  return (
    <>
      <Helmet bodyAttributes={{ dir }}>
        <meta charSet="utf-8" />
        <title>{meta.title}</title>
        <link rel="canonical" href={cannonicalUrl} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="description" content={meta.description} />
        <meta name="author" content={meta.author} />
        <link rel="shortcut icon" href={meta.favicon} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:locale" content="he_IL" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={cannonicalUrl} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:image" content={`${meta.siteUrl}${meta.image.path}`} />
        <meta property="og:image:width" content={meta.image.width} />
        <meta property="og:image:height" content={meta.image.height} />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  );
};
