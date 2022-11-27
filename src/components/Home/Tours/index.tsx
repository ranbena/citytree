import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { Col, Container, Row } from 'react-bootstrap';
import { Title, Paragraph, BoxInner, LinkButton } from 'src/components/Box';
import Hero from 'src/components/Hero';
import image from 'src/assets/images/tours/CityTreeSite_Tours_01_Alex.jpeg';
import { formatPath } from 'src/utils';
import { PAGES } from 'src/constants';
import './styles.scss';

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
                    <FormattedMessage id="tours.groups.title" />
                  </Title>
                  <Paragraph grow>
                    <FormattedMessage id="tours.groups.desc" />
                  </Paragraph>
                  <Paragraph weight={600} reverseUnderline>
                    <Link to={formatPath(intl, PAGES.groupTours)}>
                      - <FormattedMessage id="more-details" />
                      ...
                    </Link>
                  </Paragraph>
                  <div>
                    <LinkButton href={PAGES.groupTourFormHebrew} target="_blank">
                      <FormattedMessage id="tours.order" />
                    </LinkButton>
                  </div>
                </BoxInner>
              </Col>
              <Col lg={6}>
                <BoxInner size="small" center fullHeight>
                  <Title>
                    <FormattedMessage id="tours.private.title" />
                  </Title>
                  <Paragraph grow>
                    <FormattedMessage id="tours.private.desc" />
                  </Paragraph>
                  <Paragraph weight={600} reverseUnderline>
                    <Link to={formatPath(intl, PAGES.privateTours)}>
                      - <FormattedMessage id="more-details" />
                      ...
                    </Link>
                  </Paragraph>
                  <div>
                    <LinkButton href={PAGES.privateTourFormHebrew} target="_blank">
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
                    <LinkButton href={PAGES.forageTourFormHebrew} target="_blank">
                      <FormattedMessage id="tours.register" />
                    </LinkButton>
                  </div>
                </BoxInner>
              </Col>
              <Col lg={6}>
                <BoxInner size="small" center fullHeight>
                  <Title>
                    <FormattedMessage id="tours.magic.title" />
                  </Title>
                  <Paragraph grow>
                    <FormattedMessage id="tours.magic.desc" />
                  </Paragraph>
                  <Paragraph weight={600} reverseUnderline>
                    <Link to={formatPath(intl, PAGES.magicTours)}>
                      - <FormattedMessage id="more-details" />
                      ...
                    </Link>
                  </Paragraph>
                  <div>
                    <LinkButton href={PAGES.magicTourFormHebrew} target="_blank">
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
