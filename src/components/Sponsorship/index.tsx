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
              <Title>לחבק את העץ בפטראון</Title>
              <Paragraph className="paragraph">
                זה החלק שבו אנחנו מזמינות אתכן ואתכם להצטרף למעגל המחבקות של העץ בתשלום חודשי בעמוד
                שלנו בפטראון. זה המקום לפתוח דיון שלם על כסף, אבל אין לזה מקום כאן, ולכן תמי חוקרת
                וחושפת בדרכה שלה את שלל הכזבים של הכלכלה שנקלענו אליה – בין השאר בסדרת הלימוד "כלכלת
                קסם".
                <br />
                המודל של פטראון מתאים לנו. המחבקות משלמות כמה שהן רוצות ויכולות, וזה מתחיל ב-10 ש"ח
                בחודש. כל תשלום פותח את כל התוכן שאנחנו מעלות לפטראון, את דלת הכניסה לכל שיעורי הזום
                של תמי וגם את האפשרות לתרגל כלכלת קסם במפגשים שלנו בעולם האמיתי, שבהן המחבקות
                מוזמנות לשלם כל סכום שהן רוצות.
              </Paragraph>
              <Paragraph className="paragraph">
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
              </Paragraph>
              <Paragraph className="paragraph">
                <b> בהודיה גדולה לכל מי ומה שמאפשר לנו להמשיך בשלנו!</b>
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
