import React from 'react';
import { PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import Layout from 'src/components/Layout';
// import { getAbsolutePath } from 'src/utils';

// import topImage from 'src/assets/images/tours/Citytree_PorterTour_19_alex.jpg';
import groupMainImage from 'src/assets/images/tours/CityTre_VisitTheTree_01_tami.jpg';
import groupThumbImage1 from 'src/assets/images/tours/CityTree_BialikCircle_Liana.jpg';
import groupThumbImage2 from 'src/assets/images/tours/CityTree_Sprouts_03_tami.jpg';
import groupThumbImage3 from 'src/assets/images/tours/CityTree_Pitango_02_tami.jpg';

import privateMainImage from 'src/assets/images/tours/Couple_garden.jpg';
import privateThumbImage1 from 'src/assets/images/tours/CityTree_Dates_02_tami.jpg';
import privateThumbImage2 from 'src/assets/images/tours/CityTree_OrangePeels_01_tami.jpg';
import privateThumbImage3 from 'src/assets/images/tours/CityTree_harissa_Tami.jpg';

import { LinkButton, Paragraph } from 'src/components/Box';
import { homePhoneLink, mobilePhoneLink, PAGES, whatsappUrl } from 'src/constants';
import Tour from './Tour';
import { Title, BoxInner, ButtonWrapper } from './styles';

// const image = {
//   path: ogImageHe,
//   width: '1600',
//   height: '800',
// };

const Page: React.FC<PageProps> = () => {
  const intl = useIntl();
  const pageTitle = intl.formatMessage({ id: 'tours.meta.title' });
  const pageDesc = intl.formatMessage({ id: 'tours.meta.desc' });

  return (
    <Layout>
      <Helmet title={pageTitle}>
        <meta property="og:title" content={pageTitle} />
        <meta name="description" content={pageDesc} />
        <meta property="og:description" content={pageDesc} />
        {/* <meta property="og:image" content={getAbsolutePath(image.path)} />
        <meta property="og:image:width" content={image.width} />
        <meta property="og:image:height" content={image.height} /> */}
      </Helmet>
      <Tour
        bgcolor="#4a3b35"
        anchor="group"
        mainImage={groupMainImage}
        thumbImages={[groupThumbImage1, groupThumbImage2, groupThumbImage3]}
      >
        <BoxInner fullHeight color="#fff5f1">
          <Title>
            <FormattedMessage id="tours.groups.title" />
          </Title>
          <Paragraph
            grow
            intlId="tours.groups.text"
            values={{
              mobilePhoneLink,
              homePhoneLink,
              whatsapp: (txt: string) => <a href={whatsappUrl}>{txt}</a>,
            }}
          />
          <ButtonWrapper>
            <LinkButton href={PAGES.groupTourFormHebrew} target="_blank">
              <FormattedMessage id="tours.orderTour" />
            </LinkButton>
          </ButtonWrapper>
        </BoxInner>
      </Tour>
      <Tour
        bgcolor="#595337"
        anchor="group"
        mainImage={privateMainImage}
        thumbImages={[privateThumbImage1, privateThumbImage2, privateThumbImage3]}
        reverseLayout
      >
        <BoxInner fullHeight color="#fffcf0">
          <Title>
            <FormattedMessage id="tours.private.title" />
          </Title>
          <Paragraph
            grow
            intlId="tours.private.text"
            values={{
              a: (txt: string) => (
                <a href={PAGES.privateTourFormHebrew} target="_blank" rel="noreferrer noopener">
                  {txt}
                </a>
              ),
            }}
          />
          <ButtonWrapper>
            <LinkButton href={PAGES.privateTourFormHebrew} target="_blank">
              <FormattedMessage id="tours.orderTour" />
            </LinkButton>
          </ButtonWrapper>
        </BoxInner>
      </Tour>
    </Layout>
  );
};

export default Page;
