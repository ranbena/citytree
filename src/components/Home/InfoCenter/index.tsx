import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { Title, Paragraph, FloatBox } from 'src/components/Box';
import image from 'src/assets/images/info_bg.jpeg';
import { PAGES, youtubeUrl } from 'src/constants';
import { ComingSoonModalProvider } from 'src/components/ComingSoonModal';
import { formatPath } from 'src/utils';
import { InfoCenterHero } from './styles';

function InfoCenter() {
  const intl = useIntl();

  return (
    <ComingSoonModalProvider>
      {(showModal) => (
        <InfoCenterHero image={image} boxColor="#c9ddc9cc" anchor="info">
          <Container className="infoCenterContainer">
            <FloatBox position="center">
              <Title>
                <FormattedMessage id="info.title" />
              </Title>
              <Paragraph>
                <FormattedMessage id="info.text" />
                <span className="inner-links">
                  <Link to={PAGES.manifests} onClick={showModal}>
                    <FormattedMessage id="info.manifests.title" />
                  </Link>
                  <br />
                  <Link to={PAGES.articles} onClick={showModal}>
                    <FormattedMessage id="info.articles.title" />
                  </Link>
                  <br />
                  <Link to={PAGES.sources} onClick={showModal}>
                    <FormattedMessage id="info.sources.title" />
                  </Link>
                  <br />
                  <Link to={PAGES.glossary} onClick={showModal}>
                    <FormattedMessage id="info.glossary.title" />
                  </Link>
                  <br />
                  <Link to={youtubeUrl} target="_blank">
                    <FormattedMessage id="info.videos.title" />
                  </Link>
                </span>
              </Paragraph>
            </FloatBox>

            <FloatBox position="topRight" href={formatPath(intl, PAGES.blog)} onClick={showModal}>
              <Title>
                <FormattedMessage id="info.posts.title" />
              </Title>
              <Paragraph>
                <FormattedMessage id="info.posts.text" />
              </Paragraph>
            </FloatBox>

            <FloatBox position="right" href={formatPath(intl, PAGES.manifests)} onClick={showModal}>
              <Title>
                <FormattedMessage id="info.manifests.title" />
              </Title>
              <Paragraph>
                <FormattedMessage id="info.manifests.text" />
              </Paragraph>
            </FloatBox>

            <FloatBox
              position="bottomRight"
              href={formatPath(intl, PAGES.articles)}
              onClick={showModal}
            >
              <Title>
                <FormattedMessage id="info.articles.title" />
              </Title>
              <Paragraph>
                <FormattedMessage id="info.articles.text" />
              </Paragraph>
            </FloatBox>

            <FloatBox position="bottom" href={formatPath(intl, PAGES.sources)} onClick={showModal}>
              <Title>
                <FormattedMessage id="info.sources.title" />
              </Title>
              <Paragraph>
                <FormattedMessage id="info.sources.text" />
              </Paragraph>
            </FloatBox>

            <FloatBox position="left" href={formatPath(intl, PAGES.glossary)} onClick={showModal}>
              <Title>
                <FormattedMessage id="info.glossary.title" />
              </Title>
              <Paragraph>
                <FormattedMessage id="info.glossary.text" />
              </Paragraph>
            </FloatBox>

            <FloatBox position="topLeft" href={youtubeUrl} target="_blank">
              <Title>
                <FormattedMessage id="info.videos.title" />
              </Title>
              <Paragraph>
                <FormattedMessage id="info.videos.text" />
              </Paragraph>
            </FloatBox>
          </Container>
        </InfoCenterHero>
      )}
    </ComingSoonModalProvider>
  );
}

export default InfoCenter;
