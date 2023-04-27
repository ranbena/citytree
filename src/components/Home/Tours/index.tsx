import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { Col, Container, Row } from 'react-bootstrap';
import { Paragraph, BoxInner, LinkButton } from 'src/components/Box';
import Hero from 'src/components/Hero';
import image from 'src/assets/images/tours/CityTreeSite_Tours_01_Alex.jpeg';
import { formatPath } from 'src/utils';
import { PAGES } from 'src/constants';
import { Title } from './styles';

function Tours() {
  const intl = useIntl();

  return (
    <Hero image={image} boxColor="#fff8dedd" anchor="tours" position="right">
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
                    <FormattedMessage id="tours.tami.title" />
                  </Title>
                  <Paragraph grow>
                    <FormattedMessage id="tours.tami.desc" />
                  </Paragraph>
                  <Paragraph weight={600} reverseUnderline>
                    <Link to={formatPath(intl, PAGES.tamiLecture)}>
                      - <FormattedMessage id="more-details" />
                      ...
                    </Link>
                  </Paragraph>
                  <div>
                    <LinkButton href={PAGES.lecturesForm} target="_blank">
                      <FormattedMessage id="tours.order" />
                    </LinkButton>
                  </div>
                </BoxInner>
              </Col>
              <Col lg={6}>
                <BoxInner size="small" center fullHeight>
                  <Title>
                    <FormattedMessage id="tours.einat.title" />
                  </Title>
                  <Paragraph grow>
                    <FormattedMessage id="tours.einat.desc" />
                  </Paragraph>
                  <Paragraph weight={600} reverseUnderline>
                    <Link to={formatPath(intl, PAGES.einatLecture)}>
                      - <FormattedMessage id="more-details" />
                      ...
                    </Link>
                  </Paragraph>
                  <div>
                    <LinkButton href={PAGES.lecturesForm} target="_blank">
                      <FormattedMessage id="tours.order" />
                    </LinkButton>
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
                    <FormattedMessage id="tours.forage.desc" />
                  </Paragraph>
                  <Paragraph weight={600} reverseUnderline>
                    <Link to={formatPath(intl, PAGES.forageTours)}>
                      - <FormattedMessage id="more-details" />
                      ...
                    </Link>
                  </Paragraph>
                  <div>
                    <LinkButton href={PAGES.lecturesForm} target="_blank">
                      <FormattedMessage id="tours.register" />
                    </LinkButton>
                  </div>
                </BoxInner>
              </Col>
              <Col lg={6}>
                <BoxInner size="small" center fullHeight>
                  <Title>
                    <FormattedMessage id="tours.sessions.title" />
                  </Title>
                  <Paragraph grow>
                    <FormattedMessage id="tours.sessions.desc" />
                  </Paragraph>
                  <Paragraph weight={600} reverseUnderline>
                    <Link to={formatPath(intl, PAGES.sessions)}>
                      - <FormattedMessage id="more-details" />
                      ...
                    </Link>
                  </Paragraph>
                  <div>
                    <LinkButton href={PAGES.lecturesForm} target="_blank">
                      <FormattedMessage id="tours.register" />
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

export default Tours;
