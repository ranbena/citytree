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
              <Paragraph>
                כל העבודה במסגרת משק הבית והגינה, כמו גם חיי השיתוף עם חברינו לדרך (א'נשים וחברים
                אחרים) תופשים חלק נכבד מזמן העבודה שלנו, במנותק מכלכלת הכסף והדברים האלה הם שהופכים
                את עץבעיר למרכז ידע חי ורדיקלי.
              </Paragraph>
              <Paragraph>
                בתחילת הדרך, תמי ואלון ממנו את העץ מחסכונותיהם וכשאלה נגמרו, למזלו של העץ, נמצאו
                הא'נשים שמתרגשים מכך שאנחנו חיות את מה שאנחנו מדברות עליו. הם נעזרים בלימוד שלנו,
                ונותנים לנו מכספם כדי שנמשיך לחקור ולחדש.
              </Paragraph>
              <Paragraph>
                קבלו את... <b>מעגל המחבקות!</b>
              </Paragraph>
              <Paragraph>ההזמנה פתוחה לתמוך ישירות בעץבעיר, ולקבל מתנות מהעץ:</Paragraph>
              <Paragraph>
                <em>קבוצת לימוד חודשית עם תמי</em>
                <em> * מפגשי זום עונתיים</em>
                <em> * מפגשים קהילתיים</em>
                <em> * קבוצת פייסבוק פרטית שבה אנחנו חושפות סודות</em>
                <em> * תרגול כלכלת מתנות</em>
              </Paragraph>
              <Paragraph>
                <b>בהוקרה רבה על כל מי ומה שמאפשר לנו להמשיך בשלנו! תודה שבאתן!</b>
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
