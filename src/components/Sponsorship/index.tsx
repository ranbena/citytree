import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Title, Paragraph, BoxInner, FloatBox } from 'src/components/Box';
import image from 'src/assets/images/sponsorship_bg.jpeg';
import { hugTheTreeUrl } from 'src/constants';
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
              <Title>לחבק את העץ בפטראון</Title>
              <Paragraph className="paragraph">
                כבר כמעט עשרים שנה שאנחנו חוקרות את האקולוגיה העמוקה של חיי היום-יום, כנגד הזרם,
                כנגד ההכחדה, כנגד מה שההורים שלנו היו רוצים שנעשה.
                <br /> אנחנו מזמינות אתכן להיות פטרונים ופטרוניות ("מחבקים ומחבקות") של העבודה
                הרדיקלית שלנו – בתשלום חודשי בעמוד של עץבעיר בפטראון .
              </Paragraph>
              <Paragraph>
                תקבלו גישה לכל החומרים שאנחנו מעלות לשם, כניסה לכל מפגש זום ובחירה כמה לשלם על
                מפגשים בעולם האמיתי.
                <br />
                את כל הפרטים תוכלו למצוא בעמוד :
                <a href={hugTheTreeUrl} target="_blank">
                  כל מה שהמחבקות מקבלות.
                </a>
                <br />
                אפשר להתחיל כ"מחבקת חופשייה" (Free Member) או ב-10 ש"ח בחודש.
              </Paragraph>
              {/* <Paragraph className="paragraph">
                <b>בקיצור, בתשלום חודשי בפטראון תקבלו:</b>
              </Paragraph>
              <Paragraph className="paragraph">
                <em>שמחה שבאה עם חיבוק העץ – החברות במעגל שמאפשר את המשך היצירה שלנו.</em>
                <em>כניסה ללא תשלום נוסף לשיעורי הזום</em>
                <em>
                  פתיחה של כל התוכן הסגור בפטראון – הוא סגור גם מאחר שהוא רדיקלי יותר ושמור לעיניהן
                  של מי שכבר מחוברות לרדיקליות של עץבעיר.
                </em>
                <em>פגישת מחבקות מיוחדת פעמיים בשנה (בזום).</em>
                <em>
                  תשלום פתוח על כל מפגש בעולם האמיתי – סיורי הליקוט של אלון, מפגשי לימוד עם תמי.
                </em>
                <em>קבוצת ואטסאפ שקטה לעדכונים ותזכורות</em>
                <em>אפשרות לשיחה רב-צדדית בתוך הפלטפורמה של הפטראון</em>
              </Paragraph> */}
              <Paragraph className="paragraph">
                <b> בהודיה גדולה לכל מי ומה שמאפשר לנו להמשיך בשלנו!</b>
              </Paragraph>
              <Paragraph>
                <b>תמי ואלון</b>
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
