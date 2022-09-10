import React from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { Col, Container, Row } from 'react-bootstrap';
import { Title, Paragraph, BoxInner, FloatBox } from 'src/components/Box';
import image from 'src/assets/images/ppl_bg.jpeg';
import { formatAnchor, formatPath } from 'src/utils';
import { PAGES } from 'src/constants';
import { ComingSoonModalProvider } from 'src/components/ComingSoonModal';
import { PeopleHero } from './styles';

function People() {
  const intl = useIntl();

  return (
    <ComingSoonModalProvider>
      {(showModal) => (
        <PeopleHero image={image} boxColor="#aabad3cc" anchor="people">
          <Container>
            <Row className="main-row">
              <Col md={4} lg={5} xl={6} className="side-column">
                <Row>
                  <Col>
                    <FloatBox position="top" staticPosition href={PAGES.people} target="_blank">
                      <Title>
                        <FormattedMessage id="people.people.title" />
                      </Title>
                      <Paragraph>
                        <FormattedMessage id="people.people.text" />
                      </Paragraph>
                    </FloatBox>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FloatBox
                      position="center"
                      staticPosition
                      href={formatPath(intl, PAGES.supporters)}
                      onClick={showModal}
                    >
                      <Title>
                        <FormattedMessage id="people.supporters.title" />
                      </Title>
                      <Paragraph>
                        <FormattedMessage id="people.supporters.text" />
                      </Paragraph>
                    </FloatBox>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FloatBox
                      position="bottom"
                      staticPosition
                      href={formatPath(intl, PAGES.money)}
                      onClick={showModal}
                    >
                      <Title>
                        <FormattedMessage id="people.money.title" />
                      </Title>
                      <Paragraph>
                        <FormattedMessage id="people.money.text" />
                      </Paragraph>
                    </FloatBox>
                  </Col>
                </Row>
              </Col>
              <Col md={8} lg={7} xl={6}>
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
        </PeopleHero>
      )}
    </ComingSoonModalProvider>
  );
}

export default People;
