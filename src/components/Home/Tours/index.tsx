import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { Col, Container, Row } from 'react-bootstrap';
import { Title, Paragraph, BoxInner, Button } from 'src/components/Box';
import Hero from 'src/components/Hero';
import image from 'src/assets/images/CityTreeSite_Tours_01_Alex.jpeg';
import './styles.scss';

function Tours() {
  return (
    <Hero image={image} boxColor="#fff8decc" position="right" anchor="tours">
      <Container className="tours">
        <Row>
          <Col xl={7} lg={6}>
            <BoxInner fullHeight>
              <Title>
                <FormattedMessage id="tours.general.title" />
              </Title>
              <Paragraph intlId="tours.general.text" />
            </BoxInner>
          </Col>
          <Col xl={5} lg={6} className="side-column">
            <Row>
              <Col lg={6}>
                <BoxInner size="small" center fullHeight>
                  <Title>
                    <FormattedMessage id="tours.groups.title" />
                  </Title>
                  <Paragraph grow>
                    <FormattedMessage id="tours.groups.text" />
                  </Paragraph>
                  <Paragraph weight={600} reverseUnderline>
                    <Link to="/tours#groups">
                      - <FormattedMessage id="more-details" />
                      ...
                    </Link>
                  </Paragraph>
                  <div>
                    <Button>
                      <FormattedMessage id="order" />
                    </Button>
                  </div>
                </BoxInner>
              </Col>
              <Col lg={6}>
                <BoxInner size="small" center fullHeight>
                  <Title>
                    <FormattedMessage id="tours.private.title" />
                  </Title>
                  <Paragraph grow>
                    <FormattedMessage id="tours.private.text" />
                  </Paragraph>
                  <Paragraph weight={600} reverseUnderline>
                    <Link to="/tours#private">
                      - <FormattedMessage id="more-details" />
                      ...
                    </Link>
                  </Paragraph>
                  <div>
                    <Button>
                      <FormattedMessage id="order" />
                    </Button>
                  </div>
                </BoxInner>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <BoxInner size="small" center fullHeight>
                  <Title>
                    <FormattedMessage id="tours.forage.title" />
                  </Title>
                  <Paragraph grow>
                    <FormattedMessage id="tours.forage.text" />
                  </Paragraph>
                  <Paragraph weight={600} reverseUnderline>
                    <Link to="/tours#forage">
                      - <FormattedMessage id="more-details" />
                      ...
                    </Link>
                  </Paragraph>
                  <div>
                    <Button>
                      <FormattedMessage id="register" />
                    </Button>
                  </div>
                </BoxInner>
              </Col>
              <Col lg={6}>
                <BoxInner size="small" center fullHeight>
                  <Title>
                    <FormattedMessage id="tours.magic.title" />
                  </Title>
                  <Paragraph grow>
                    <FormattedMessage id="tours.magic.text" />
                  </Paragraph>
                  <Paragraph weight={600} reverseUnderline>
                    <Link to="/tours#magic">
                      - <FormattedMessage id="more-details" />
                      ...
                    </Link>
                  </Paragraph>
                  <div>
                    <Button>
                      <FormattedMessage id="register" />
                    </Button>
                  </div>
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
