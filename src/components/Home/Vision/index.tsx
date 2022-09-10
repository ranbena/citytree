import React from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { Col, Container, Row } from 'react-bootstrap';
import { Title, Paragraph, BoxInner, FloatBox } from 'src/components/Box';
import image from 'src/assets/images/vision_bg.jpeg';
import { formatPath } from 'src/utils';
import { ComingSoonModalProvider } from 'src/components/ComingSoonModal';
import { PAGES } from 'src/constants';
import { VisionHero } from './styles';

function Vision() {
  const intl = useIntl();

  return (
    <ComingSoonModalProvider>
      {(showModal) => (
        <VisionHero image={image} boxColor="#b9d3d6cc" anchor="vision">
          <Container>
            <Row>
              <Col md={8} lg={7} xl={6}>
                <BoxInner className="vision-main">
                  <Title className="vision-title">
                    <FormattedMessage id="vision.general.title" />
                  </Title>
                  <Paragraph
                    intlId="vision.general.text"
                    values={{ b: (txt: string) => <strong>{txt}</strong> }}
                  />
                </BoxInner>
              </Col>
              <Col md={4} lg={5} xl={6} className="side-column">
                <Row>
                  <Col>
                    <FloatBox
                      position="top"
                      staticPosition
                      href={formatPath(intl, PAGES.trees)}
                      onClick={showModal}
                    >
                      <Title>
                        <FormattedMessage id="vision.trees.title" />
                      </Title>
                      <Paragraph>
                        <FormattedMessage id="vision.trees.text" />
                      </Paragraph>
                    </FloatBox>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FloatBox
                      position="center"
                      staticPosition
                      href={formatPath(intl, PAGES.forestCity)}
                      onClick={showModal}
                    >
                      <Title>
                        <FormattedMessage id="vision.forest-city.title" />
                      </Title>
                      <Paragraph>
                        <FormattedMessage id="vision.forest-city.text" />
                      </Paragraph>
                    </FloatBox>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FloatBox
                      position="bottom"
                      staticPosition
                      href={formatPath(intl, PAGES.poetry)}
                      onClick={showModal}
                    >
                      <Title>
                        <FormattedMessage id="vision.poetry.title" />
                      </Title>
                      <Paragraph>
                        <FormattedMessage id="vision.poetry.text" />
                      </Paragraph>
                    </FloatBox>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </VisionHero>
      )}
    </ComingSoonModalProvider>
  );
}

export default Vision;
