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
                    <FloatBox position="top" staticPosition href={PAGES.people} target="_blank">
                      <Title>א'נשות העץ</Title>
                      <Paragraph>תמי, אלון, אבי, עינת... כמעט כל מה שרציתן לדעת עלינו...</Paragraph>
                    </FloatBox>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FloatBox
                      position="center"
                      staticPosition
                      href={formatPath(PAGES.huggers)}
                      onClick={showModal}
                    >
                      <Title>מחבקות</Title>
                      <Paragraph>כמה מחבקות נבחרות ומה יש להן להגיד על העץ...</Paragraph>
                    </FloatBox>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FloatBox
                      position="bottom"
                      staticPosition
                      href={formatPath(PAGES.money)}
                      onClick={showModal}
                    >
                      <Title>כסף</Title>
                      <Paragraph>
                        רוצות להבין איך אנחנו מתפרנסות בדיוק? ״ממה העץ חי?״ הנה כאן כל הסיפור הכלכלי
                        שלנו...
                      </Paragraph>
                    </FloatBox>
                  </Col>
                </Row>
              </Col>
              <Col md={8} lg={7} xl={6}>
                <BoxInner className="people-main">
                  <Title className="people-title">מי עומד מאחורי העץ?</Title>
                  <Paragraph>או יותר נכון, מי עומד מסביבו ומחבק אותו?"</Paragraph>
                  <Paragraph>
                    במרכז העשייה תמי צרי שהקימה את עץבעיר ומסורה לו מ-2006, ולצידה אלון אלירן שהצטרף
                    אליה ב-2008. חוברים אליהם אבי ועינת, כל אחת בדרכה, וכל אחת בדרכים שבהן היא תורמת
                    ליצירה המתמשכת. אנחנו גרים יחדיו בדירה האקולוגית, ואיתנו אורחות פורחות ממעגל
                    המחבקות.
                  </Paragraph>
                  <Paragraph>ובכן... מהו ״מעגל המחבקות״?</Paragraph>
                  <Paragraph>
                    ״המחבקות״ הן כל אותם א'נשים שעזרו ועוזרים לנו בדרכינו. שבלעדיהן לא היינו כאן
                    היום, ובלעדיהן לא נוכל להמשיך. רבות מהן תורמות לנו בסכום חודשי קבוע (
                    <a href={formatAnchor('sponsor')}>דרך הפטראון או באמצעי תשלום אחרים</a>), ואחרות
                    תורמות בדרכים אחרות ובזמנים שונים - בתרומות חד פעמיות של כסף, של זמן, של יכולות
                    ושל רעיונות ועצות.
                  </Paragraph>
                  <Paragraph>
                    המחבקות זוכות ליחס מיוחד: מפגשים, תכנים רדיקליים והתנסות בכלכלת מתנות.
                  </Paragraph>
                  <Paragraph>
                    <b>הבה ונשוב הביתה!</b>
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
