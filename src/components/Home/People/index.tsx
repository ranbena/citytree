import React from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { Col, Container, Row } from 'react-bootstrap';
import { Title, Paragraph, BoxInner } from 'src/components/Box';
import Hero from 'src/components/Hero';
import image from 'src/assets/images/ppl_bg.jpeg';
import { formatAnchor } from 'src/utils';
import './styles.scss';

function People() {
  const intl = useIntl();

  return (
    <Hero image={image} boxColor="#aabad3cc" anchor="people">
      <Container className="people">
        <Row>
          <Col lg={6} className="side-column">
            <Row>HI</Row>
          </Col>
          <Col lg={6}>
            <BoxInner className="people-main">
              <Title className="people-title">
                <FormattedMessage id="people.general.title" />
              </Title>
              <Paragraph
                intlId="people.general.text"
                values={{
                  b: (txt: string) => <strong>{txt}</strong>,
                  a: (txt: string) => <a href={formatAnchor(intl, 'sponsor')}>{txt}</a>,
                }}
              />
            </BoxInner>
          </Col>
        </Row>
      </Container>
    </Hero>
  );
}

export default People;
