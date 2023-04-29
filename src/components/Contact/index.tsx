import React from 'react';
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
              <Title>כל הדרכים להיות בקשר עם העץ</Title>
              <Paragraph>
                קודם כל, אנחנו בעד תקשורת בסגנון הישן:
                <span className="contact-details-top">
                  {emailLink} | {tamiPhoneLink}
                </span>
              </Paragraph>
              <div className="contact-details">
                <strong className="contact-also">וגם:</strong>
                <h4>לכל מי שרוצה רק (או גם) הודעות קצרות:"</h4>
                <strong>אפשר להצטרף לקבוצת וואטסאפ ״דברים שקורים בעץ״.</strong>
                <LinkButton href={whatsappGroupInviteLink} target="_blank">
                  <WhatsappIcon />
                  להצטרפות לקבוצת ההודעות בוואטסאפ
                </LinkButton>
              </div>
              <div className="contact-details">
                <h4>לגיקים שבינינו (אנחנו אוהבות אתכם!):</h4>
                <strong>אפשר להוסיף את יומן האירועים שלנו ליומן שלכם בגוגל! וואו!</strong>
                <LinkButton href={calendarUrl} target="_blank">
                  <GoogleIcon />
                  להוספת יומן האירועים ״דברים שקורים בעץ״
                </LinkButton>
              </div>
              <div className="contact-details">
                <h4>לשבויים של פייסבוק (כמונו!):</h4>
                <strong>אפשר לעקוב אחרינו וגם לכתוב אלינו. בפייסבוק:</strong>
                <LinkButton href={facebookUrl} target="_blank">
                  <FacebookIcon />
                  לעמוד של עץבעיר בפייסבוק
                </LinkButton>
              </div>
            </BoxInner>
          </Col>
          <Col lg={6} className="side-column">
            <BoxInner fullHeight color="#f7fbe2b3">
              <Title>הרשמה לרשימת התפוצה</Title>
              <Paragraph className="newsletter-desc">
                פעם בחודש וחצי אנחנו שולחות עלון, ובו מידע על כל הסדנאות והאירועים, טיפ שבועי
                ועדכונים שוטפים. לעתים אנחנו שולחות עוד עלוןצ'יק בין לבין.
              </Paragraph>
              <Subscribe />
            </BoxInner>
          </Col>
        </Row>
      </LeafContainer>
    </div>
  );
}

export default Contact;
