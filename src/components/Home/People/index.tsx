import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Title, Paragraph, BoxInner, FloatBox } from 'src/components/Box';
import image from 'src/assets/images/ppl_bg.jpeg';
import { formatAnchor, formatPath } from 'src/utils';
import { PAGES } from 'src/constants';
import { ComingSoonModalProvider } from 'src/components/ComingSoonModal';
import { PeopleHero } from './styles';

function People() {
  return (
    <ComingSoonModalProvider>
      {(showModal) => (
        <PeopleHero image={image} boxColor="#aabad3cc" anchor="people">
          <Container>
            <Row className="main-row">
              <Col md={4} lg={5} xl={6} className="side-column">
                <Row>
                  <Col>
                    <FloatBox
                      position="center"
                      staticPosition
                      href={formatPath(PAGES.money)}
                      onClick={showModal}
                    >
                      <Title>תמי צרי</Title>
                      <Paragraph>כמה מילים על תמי צרי</Paragraph>
                    </FloatBox>
                  </Col>
                </Row>

                <BoxInner className="people-main">
                  <Title className="people-title">מי עומד מאחורי העץ ומחבק אותו?</Title>
                  <Paragraph>
                    אנו רואות תרבות אנושית מחוברת, שמוקירה את האדמה, מכבדת את המים, חוגגת את האש
                    ומעריכה את האוויר. בזמנים אלה של חוסר־ביטחון ואובדן־אמון, אנו מקווים לימים שבהם
                    תחושת הביטחון תשוב ותנבע משפע של אהבה, חיבור ובריאות. אנו רואות בעיני־רוחנו את
                    הבתים מתמלאים מחדש בחיים ואותנו, הא'נשים, חוזרים הביתה – אל החיבור הבלתי־אמצעי
                    לכל מה שמזין אותנו – למזון בריא ומיטיב, לקהילה, לכל מה שחי סביבנו ובתוכנו. השיבה
                    הביתה היא שיבה לאכפתיות, לטיפוח הסביבה שלנו ולהרמוניה עם הפלנטה. הבה ונחזור
                    לתפקידנו כשומרי ומטפחי החיים עלי אדמות.
                  </Paragraph>
                  <Paragraph>
                    "המחבקות" הן כל אותם א'נשים שעזרו ועוזרים לנו בדרכנו, שבלעדיהן לא היינו כאן
                    היום. רבות מהן תורמות לנו בסכום חודשי קבוע (
                    <a href={formatAnchor('sponsor')}>דרך הפטראון או באמצעי תשלום אחרים</a>), ואחרות
                    תורמות בדרכים אחרות ובזמנים שונים – בתרומות חד-פעמיות של כסף, של זמן, של יכולות
                    ושל רעיונות ועצות.
                  </Paragraph>
                  <div>
                    המחבקות זוכות לקבל מאיתנו מתנות:
                    <ul>
                      <li>* מפגש לימוד חודשי בזום עם תמי. </li>
                      <li>* גישה לכל הסדנאות המעשיות שלנו ללא תשלום נוסף</li>
                      <li>* מפגש עדכונים שאלות ותשובות פעמיים בשנה</li>
                      <li>* תכנים מיוחדים, בקבוצה פרטית בפייסבוק ובפטראון</li>
                    </ul>
                    <br />
                  </div>
                  <Paragraph>
                    <b>הצטרפו נא למעגל המחבקות!</b>
                  </Paragraph>
                </BoxInner>
              </Col>
              <Col md={8} lg={7} xl={6} className="side-column">
                <Row>
                  <Col>
                    <FloatBox position="center" staticPosition>
                      <Title>אלון אלירן</Title>
                      <Paragraph>כמה מילים על אלון אלירן </Paragraph>
                    </FloatBox>
                  </Col>
                </Row>

                <BoxInner className="people-main">
                  <Title className="people-title">מי עומד מאחורי העץ ומחבק אותו?</Title>
                  <Paragraph>
                    אנו רואות תרבות אנושית מחוברת, שמוקירה את האדמה, מכבדת את המים, חוגגת את האש
                    ומעריכה את האוויר. בזמנים אלה של חוסר־ביטחון ואובדן־אמון, אנו מקווים לימים שבהם
                    תחושת הביטחון תשוב ותנבע משפע של אהבה, חיבור ובריאות. אנו רואות בעיני־רוחנו את
                    הבתים מתמלאים מחדש בחיים ואותנו, הא'נשים, חוזרים הביתה – אל החיבור הבלתי־אמצעי
                    לכל מה שמזין אותנו – למזון בריא ומיטיב, לקהילה, לכל מה שחי סביבנו ובתוכנו. השיבה
                    הביתה היא שיבה לאכפתיות, לטיפוח הסביבה שלנו ולהרמוניה עם הפלנטה. הבה ונחזור
                    לתפקידנו כשומרי ומטפחי החיים עלי אדמות.
                  </Paragraph>
                  <Paragraph>
                    "המחבקות" הן כל אותם א'נשים שעזרו ועוזרים לנו בדרכנו, שבלעדיהן לא היינו כאן
                    היום. רבות מהן תורמות לנו בסכום חודשי קבוע (
                    <a href={formatAnchor('sponsor')}>דרך הפטראון או באמצעי תשלום אחרים</a>), ואחרות
                    תורמות בדרכים אחרות ובזמנים שונים – בתרומות חד-פעמיות של כסף, של זמן, של יכולות
                    ושל רעיונות ועצות.
                  </Paragraph>
                  <div>
                    המחבקות זוכות לקבל מאיתנו מתנות:
                    <ul>
                      <li>* מפגש לימוד חודשי בזום עם תמי. </li>
                      <li>* גישה לכל הסדנאות המעשיות שלנו ללא תשלום נוסף</li>
                      <li>* מפגש עדכונים שאלות ותשובות פעמיים בשנה</li>
                      <li>* תכנים מיוחדים, בקבוצה פרטית בפייסבוק ובפטראון</li>
                    </ul>
                    <br />
                  </div>
                  <Paragraph>
                    <b>הצטרפו נא למעגל המחבקות!</b>
                  </Paragraph>
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
