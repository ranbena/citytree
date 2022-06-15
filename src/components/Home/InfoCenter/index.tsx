import React from 'react';
// import { Link } from 'gatsby';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { Container } from 'react-bootstrap';
import { Title, Paragraph, BoxInner } from 'src/components/Box';
import Hero from 'src/components/Hero';
import image from '../../../assets/images/info_bg.jpeg';
import './styles.scss';

function FloatBox({
  position,
  children,
}: {
  position: 'topRight' | 'right' | 'bottomRight' | 'bottom' | 'left' | 'topLeft' | 'center';
  children: React.ReactNode;
}) {
  return (
    <BoxInner center className={`floatBox ${position}`}>
      {children}
    </BoxInner>
  );
}

function InfoCenter() {
  return (
    <Hero image={image} boxColor="#c9ddc9cc" position="right" anchor="info" className="infoCenter">
      <Container className="infoCenterContainer">
        <FloatBox position="center">
          <Title>
            <FormattedMessage id="info.title" />
          </Title>
          <Paragraph>
            <FormattedMessage id="info.text" />
          </Paragraph>
        </FloatBox>

        <FloatBox position="topRight">
          <Title>
            <FormattedMessage id="info.posts.title" />
          </Title>
          <Paragraph>
            <FormattedMessage id="info.posts.text" />
          </Paragraph>
        </FloatBox>

        <FloatBox position="right">
          <Title>
            <FormattedMessage id="info.manifests.title" />
          </Title>
          <Paragraph>
            <FormattedMessage id="info.manifests.text" />
          </Paragraph>
        </FloatBox>

        <FloatBox position="bottomRight">
          <Title>
            <FormattedMessage id="info.articles.title" />
          </Title>
          <Paragraph>
            <FormattedMessage id="info.articles.text" />
          </Paragraph>
        </FloatBox>

        <FloatBox position="bottom">
          <Title>
            <FormattedMessage id="info.sources.title" />
          </Title>
          <Paragraph>
            <FormattedMessage id="info.sources.text" />
          </Paragraph>
        </FloatBox>

        <FloatBox position="left">
          <Title>
            <FormattedMessage id="info.glossary.title" />
          </Title>
          <Paragraph>
            <FormattedMessage id="info.glossary.text" />
          </Paragraph>
        </FloatBox>

        <FloatBox position="topLeft">
          <Title>
            <FormattedMessage id="info.videos.title" />
          </Title>
          <Paragraph>
            <FormattedMessage id="info.videos.text" />
          </Paragraph>
        </FloatBox>
      </Container>
    </Hero>
  );
}

export default InfoCenter;
