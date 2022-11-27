import React from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { Col, Container, Row } from 'react-bootstrap';
import { Title, Paragraph, BoxInner, LinkButton } from 'src/components/Box';
import Hero from 'src/components/Hero';
import image from 'src/assets/images/workshops_bg.jpeg';
import { PAGES } from 'src/constants';
import { formatPath } from 'src/utils';
import { ComingSoonModalProvider } from 'src/components/ComingSoonModal';
import './styles.scss';

function Workshops() {
  const intl = useIntl();

  return (
    <Hero image={image} boxColor="#f2f9cfd0" anchor="workshops">
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
                    <LinkButton
                      href={formatPath(intl, PAGES.practicalEcologySummer, intl.defaultLocale)}
                    >
                      <FormattedMessage id="workshops.ecology.button" />
                    </LinkButton>
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
                    <ComingSoonModalProvider>
                      {(showModal) => (
                        <LinkButton
                          onClick={showModal}
                          href={formatPath(intl, PAGES.magicalEconomy)}
                        >
                          <FormattedMessage id="details-purchase" />
                        </LinkButton>
                      )}
                    </ComingSoonModalProvider>
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
                    <LinkButton href={formatPath(intl, PAGES.abracadabra)}>
                      <FormattedMessage id="details-purchase" />
                    </LinkButton>
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
