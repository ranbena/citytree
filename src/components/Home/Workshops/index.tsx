import React from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { Col, Container, Row } from 'react-bootstrap';
import { Title, Paragraph, BoxInner, LinkButton } from 'src/components/Box';
import Hero from 'src/components/Hero';
import image from 'src/assets/images/workshops_bg.jpeg';
import { PAGES } from 'src/constants';
import { formatPath } from 'src/utils';
import './styles.scss';

function Workshops() {
  const intl = useIntl();

  return (
    <Hero image={image} boxColor="#c8dcf0d0" anchor="workshops">
      <Container className="workshops">
        <Row>
          <Col lg={6}>
            <BoxInner>
              <Title>
                <FormattedMessage id="workshops.general.title" />
              </Title>
              <Paragraph
                intlId="workshops.general.text"
                values={{
                  a: (txt: string) => (
                    <a
                      href="https://www.youtube.com/playlist?list=PLrFnw7knHerdSveoSHivFNRfUNCBEpEQd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {txt}
                    </a>
                  ),
                }}
              />
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
                    <LinkButton href={formatPath(intl, PAGES.practicalEcology, intl.defaultLocale)}>
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
                    <LinkButton href={formatPath(intl, PAGES.abracadabra)}>
                      <FormattedMessage id="workshops.magic.button" />
                    </LinkButton>
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
                    <LinkButton href={PAGES.magicalEconomy} target="_blank">
                      <FormattedMessage id="workshops.economy.button" />
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
