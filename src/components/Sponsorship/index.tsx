import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Title, Paragraph, BoxInner } from 'src/components/Box';
import image from 'src/assets/images/sponsorship_bg.jpeg';
import Hero from '../Hero';
import Donate from './Donate';
import './styles.scss';

function Sponsorship() {
  return (
    <Hero image={image} boxColor="#f8fbe4d6" anchor="sponsor">
      <Container className="sponsorship">
        <Row>
          <Col lg={7}>
            <BoxInner fullHeight>
              <Title>אולי תרצו להצטרף למעגל התמיכה של העץ?</Title>
              <Paragraph className="paragraph">
                חיי השיתוף, המחקר והיצירה שלנו הם העבודה שלנו, ורוב-רובה מתרחשת במנותק מכלכלת הכסף.
                זה מה שהופך את עץבעיר למרכז ידע חי ורדיקלי. בתחילת הדרך, מימנו את עץבעיר
                מחסכונותינו, וכשאלה נגמרו, נמצאו הא'נשים שמתרגשים מכך שאנחנו חיות את מה שאנחנו
                מדברות עליו והמשיכו את דרכנו במימון הפעילות.
              </Paragraph>
              <Paragraph>
                קבלו את... <b>מעגל המחבקות!</b>
              </Paragraph>
              <Paragraph className="paragraph">
                <b>ההזמנה היא לתמוך בעץבעיר תמיכה קבועה ולקבל במתנה:</b>
              </Paragraph>
              <Paragraph className="paragraph">
                <em>כל התכנים הדיגיטליים שלנו *</em>
                <em>לימוד חודשי עם תמי *</em>
                <br />
                <em>מפגשי זום עונתיים *</em>
                <em>קבוצת פייסבוק פרטית *</em>
              </Paragraph>
              <Paragraph className="paragraph">
                <b>אנחנו בהודיה גדולה לכל מי ומה שמאפשר לנו להמשיך בשלנו!</b>
              </Paragraph>
              <Paragraph>
                <b>תודה שבאתן!</b>
              </Paragraph>
            </BoxInner>
          </Col>
          <Col lg={5} className="side-column">
            <BoxInner fullHeight className="donate">
              <Title>כל הדרכים לתת לעץ</Title>
              <Paragraph className="donate-subtitle">לתמיכה חודשית קבועה:</Paragraph>
              <Donate />
            </BoxInner>
          </Col>
        </Row>
      </Container>
    </Hero>
  );
}

export default Sponsorship;
