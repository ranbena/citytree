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
                  <Link to={PAGES.blog} onClick={showModal}>
                    <FormattedMessage id="info.posts.title" />
                  </Link>
                  <br />
                  <Link to={PAGES.manifestos} onClick={showModal}>
                    <FormattedMessage id="info.manifestos.title" />
                  </Link>
                  <br />
                  <Link to={PAGES.articles} onClick={showModal}>
                    <FormattedMessage id="info.articles.title" />
                  </Link>
                  <br />
                  <Link to={PAGES.references} onClick={showModal}>
                    <FormattedMessage id="info.references.title" />
                  </Link>
                  <br />
                  <Link to={PAGES.glossary} onClick={showModal}>
                    <FormattedMessage id="info.glossary.title" />
                  </Link>
                  <br />
                  <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                    <FormattedMessage id="info.videos.title" />
                  </a>
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

            <FloatBox
              position="right"
              href={formatPath(intl, PAGES.manifestos)}
              onClick={showModal}
            >
              <Title>
                <FormattedMessage id="info.manifestos.title" />
              </Title>
              <Paragraph>
                <FormattedMessage id="info.manifestos.text" />
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

            <FloatBox
              position="bottom"
              href={formatPath(intl, PAGES.references)}
              onClick={showModal}
            >
              <Title>
                <FormattedMessage id="info.references.title" />
              </Title>
              <Paragraph>
                <FormattedMessage id="info.references.text" />
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

            <FloatBox
              position="topLeft"
              href={youtubeUrl}
              target="_blank"
            >
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
