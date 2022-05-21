import { Link } from 'gatsby';
import { FormattedMessage } from 'gatsby-plugin-intl';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Title, Paragraph, BoxInner } from 'src/components/Box';
import Hero from 'src/components/Hero';
import image from '../../../assets/images/CityTreeSite_Tours_01_Alex.jpeg';
import './styles.scss';

function Tours() {
  return (
    <Hero image={image} boxColor="#fff8decc" position="right">
      <Container>
        <Row>
          <Col lg={7}>
            <BoxInner>
              <Title>
                <FormattedMessage id="tours.general.title" />
              </Title>
              <Paragraph intlId="tours.general.text" />
            </BoxInner>
          </Col>
          <Col lg={5} className="side-column">
            <Row>
              <Col lg={6}>
                <BoxInner size="small">
                  <Title>
                    <FormattedMessage id="tours.groups.title" />
                  </Title>
                  <Paragraph>
                    <FormattedMessage id="tours.groups.text" />
                  </Paragraph>
                  <Paragraph>
                    <Link to="/tours#groups">
                      - <FormattedMessage id="more-details" />
                      ...
                    </Link>
                  </Paragraph>
                </BoxInner>
              </Col>
              <Col lg={6}>
                <BoxInner size="small">
                  <Title>
                    <FormattedMessage id="tours.private.title" />
                  </Title>
                  <Paragraph>
                    <FormattedMessage id="tours.private.text" />
                  </Paragraph>
                  <Paragraph>
                    <Link to="/tours#private">
                      - <FormattedMessage id="more-details" />
                      ...
                    </Link>
                  </Paragraph>
                </BoxInner>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <BoxInner size="small">
                  <Title>
                    <FormattedMessage id="tours.forage.title" />
                  </Title>
                  <Paragraph>
                    <FormattedMessage id="tours.forage.text" />
                  </Paragraph>
                  <Paragraph>
                    <Link to="/tours#forage">
                      - <FormattedMessage id="more-details" />
                      ...
                    </Link>
                  </Paragraph>
                </BoxInner>
              </Col>
              <Col lg={6}>
                <BoxInner size="small">
                  <Title>
                    <FormattedMessage id="tours.magic.title" />
                  </Title>
                  <Paragraph>
                    <FormattedMessage id="tours.magic.text" />
                  </Paragraph>
                  <Paragraph>
                    <Link to="/tours#magic">
                      - <FormattedMessage id="more-details" />
                      ...
                    </Link>
                  </Paragraph>
                </BoxInner>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Hero>
  );
}

export default Tours;
