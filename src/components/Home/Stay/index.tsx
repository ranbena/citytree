import React from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { Col, Container, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import { Title, Paragraph, BoxInner, LinkButton } from 'src/components/Box';
import Hero from 'src/components/Hero';
import { ComingSoonModalProvider } from 'src/components/ComingSoonModal';
import { airbnbForm, airbnbUrl, PAGES, phone } from 'src/constants';
import image from 'src/assets/images/stay_bg.jpeg';
import { formatPath } from 'src/utils';
import './styles.scss';

const PopoverButton = ({ text, children }) => (
  <OverlayTrigger
    trigger="hover"
    placement="top"
    overlay={
      <Popover id="popover-button">
        <Popover.Content>{text}</Popover.Content>
      </Popover>
    }
  >
    <span className="mockLink">{children}</span>
  </OverlayTrigger>
);

function Stay() {
  const intl = useIntl();

  return (
    <Hero image={image} boxColor="#e5f9cfd6" anchor="stay">
      <Container className="stay">
        <Row>
          <Col lg={6}>
            <BoxInner>
              <Title>
                <FormattedMessage id="stay.general.title" />
              </Title>
              <Paragraph
                intlId="stay.general.text"
                values={{
                  airbnb: (txt: string) => <a href={airbnbUrl}>{txt}</a>,
                  call: (txt: string) => <PopoverButton text={phone}>{txt}</PopoverButton>,
                }}
              />
            </BoxInner>
          </Col>
          <Col lg={6} className="side-column">
            <Row>
              <Col>
                <BoxInner size="small">
                  <Title>
                    <FormattedMessage id="stay.airbnb.title" />
                  </Title>
                  <Paragraph>
                    <FormattedMessage
                      id="stay.airbnb.text"
                      values={{ a: (txt: string) => <a href={airbnbForm}>{txt}</a> }}
                    />
                  </Paragraph>
                  <div>
                    <LinkButton href={airbnbUrl} target="_blank">
                      <FormattedMessage id="stay.airbnb.button" />
                    </LinkButton>
                  </div>
                </BoxInner>
              </Col>
            </Row>
            <Row>
              <Col>
                <BoxInner size="small">
                  <Title>
                    <FormattedMessage id="stay.retreat.title" />
                  </Title>
                  <Paragraph>
                    <FormattedMessage id="stay.retreat.text" />
                  </Paragraph>
                  <div>
                    <ComingSoonModalProvider>
                      {(showModal) => (
                        <LinkButton onClick={showModal} href={formatPath(intl, PAGES.retreats)}>
                          <FormattedMessage id="stay.retreat.button" />
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
                    <FormattedMessage id="stay.apprenticeship.title" />
                  </Title>
                  <Paragraph>
                    <FormattedMessage id="stay.apprenticeship.text" />
                  </Paragraph>
                  <div>
                    <ComingSoonModalProvider>
                      {(showModal) => (
                        <LinkButton
                          onClick={showModal}
                          href={formatPath(intl, PAGES.apprenticeship)}
                        >
                          <FormattedMessage id="stay.apprenticeship.button" />
                        </LinkButton>
                      )}
                    </ComingSoonModalProvider>
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

export default Stay;
