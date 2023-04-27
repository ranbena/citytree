import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { Col, Row } from 'react-bootstrap';
import { Title, Paragraph, BoxInner, LinkButton } from 'src/components/Box';
import { ReactComponent as WhatsappIcon } from 'src/assets/images/icon_whatsapp.svg';
import {
  facebookUrl,
  whatsappGroupInviteLink,
  calendarUrl,
  emailLink,
  tamiPhoneLink,
} from 'src/constants';
import { ReactComponent as GoogleIcon } from 'src/assets/images/icon_google.svg';
import { ReactComponent as FacebookIcon } from 'src/assets/images/icon_facebook.svg';
import Subscribe from './Subscribe';
import LeafContainer from '../LeafContainer';
import './styles.scss';

function Contact() {
  return (
    <div className="contact" id="contact">
      <LeafContainer>
        <Row>
          <Col lg={6}>
            <BoxInner fullHeight color="#f7fbe2b3">
              <Title>
                <FormattedMessage id="contact.details.title" />
              </Title>
              <Paragraph>
                <FormattedMessage id="contact.details.text" />:
                <span className="contact-details-top">
                  {emailLink} | {tamiPhoneLink}
                </span>
              </Paragraph>
              <div className="contact-details">
                <strong className="contact-also">
                  <FormattedMessage id="contact.details.also" />:
                </strong>
                <h4>
                  <FormattedMessage id="contact.details.whatsapp.title" />
                </h4>
                <strong>
                  <FormattedMessage id="contact.details.whatsapp.text" />
                </strong>
                <LinkButton href={whatsappGroupInviteLink} target="_blank">
                  <WhatsappIcon />
                  <FormattedMessage id="contact.details.whatsapp.button" />
                </LinkButton>
              </div>
              <div className="contact-details">
                <h4>
                  <FormattedMessage id="contact.details.google.title" />
                </h4>
                <strong>
                  <FormattedMessage id="contact.details.google.text" />
                </strong>
                <LinkButton href={calendarUrl} target="_blank">
                  <GoogleIcon />
                  <FormattedMessage id="contact.details.google.button" />
                </LinkButton>
              </div>
              <div className="contact-details">
                <h4>
                  <FormattedMessage id="contact.details.facebook.title" />
                </h4>
                <strong>
                  <FormattedMessage id="contact.details.facebook.text" />
                </strong>
                <LinkButton href={facebookUrl} target="_blank">
                  <FacebookIcon />
                  <FormattedMessage id="contact.details.facebook.button" />
                </LinkButton>
              </div>
            </BoxInner>
          </Col>
          <Col lg={6} className="side-column">
            <BoxInner fullHeight color="#f7fbe2b3">
              <Title>
                <FormattedMessage id="contact.newsletter.title" />
              </Title>
              <Paragraph intlId="contact.newsletter.text" className="newsletter-desc" />
              <Subscribe />
            </BoxInner>
          </Col>
        </Row>
      </LeafContainer>
    </div>
  );
}

export default Contact;
