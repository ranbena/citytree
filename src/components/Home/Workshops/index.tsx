import { FormattedMessage } from 'gatsby-plugin-intl';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Title, Paragraph, BoxInner, Button } from 'src/components/Box';
import Hero from 'src/components/Hero';
import image from '../../../assets/images/workshops_bg.jpeg';
import './styles.scss';

function Workshops() {
  return (
    <Hero image={image} boxColor="#f2f9cfc6" position="right" anchor="workshops">
      <Container className="workshops">
        <Row>
          <Col lg={6}>
            <BoxInner>
              <Title>
                <FormattedMessage id="workshops.general.title" />
              </Title>
              <Paragraph intlId="workshops.general.text" />
            </BoxInner>
          </Col>
          <Col lg={6} className="side-column">
            <Row>
              <Col>
                <BoxInner size="small">
                  <Title>
                    <FormattedMessage id="workshops.ecology.title" />
                  </Title>
                  <Paragraph>
                    <FormattedMessage id="workshops.ecology.text" />
                  </Paragraph>
                  <div>
                    <Button>
                      <FormattedMessage id="workshops.ecology.button" />
                    </Button>
                  </div>
                </BoxInner>
              </Col>
            </Row>
            <Row>
              <Col>
                <BoxInner size="small">
                  <Title>
                    <FormattedMessage id="workshops.magic.title" />
                  </Title>
                  <Paragraph>
                    <FormattedMessage id="workshops.magic.text" />
                  </Paragraph>
                  <div>
                    <Button>
                      <FormattedMessage id="details-purchase" />
                    </Button>
                  </div>
                </BoxInner>
              </Col>
            </Row>
            <Row>
              <Col>
                <BoxInner size="small">
                  <Title>
                    <FormattedMessage id="workshops.economy.title" />
                  </Title>
                  <Paragraph>
                    <FormattedMessage id="workshops.economy.text" />
                  </Paragraph>
                  <div>
                    <Button>
                      <FormattedMessage id="details-purchase" />
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

export default Workshops;
