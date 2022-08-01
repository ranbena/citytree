import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { Col, Row, Container } from 'react-bootstrap';
import { Title, Paragraph, BoxInner } from 'src/components/Box';
import image from 'src/assets/images/sponsorship_bg.jpeg';
import Hero from '../Hero';
import './styles.scss';
import Donate from './Donate';

function Sponsorship() {
  return (
    <Hero image={image} boxColor="#f8fbe4d6" position="right">
      <Container className="sponsorship">
        <Row>
          <Col lg={7}>
            <BoxInner fullHeight>
              <Title>
                <FormattedMessage id="sponsorship.join.title" />
              </Title>
              <Paragraph
                intlId="sponsorship.join.text"
                values={{
                  b: (txt: string) => <strong>{txt}</strong>,
                  em: (txt: string) => <em>{txt}</em>,
                }}
              />
            </BoxInner>
          </Col>
          <Col lg={5} className="side-column">
            <BoxInner fullHeight className="donate">
              <Title>
                <FormattedMessage id="donate.title" />
              </Title>
              <Paragraph className="donate-subtitle" intlId="donate.text" />
              <Donate />
            </BoxInner>
          </Col>
        </Row>
      </Container>
    </Hero>
  );
}

export default Sponsorship;
