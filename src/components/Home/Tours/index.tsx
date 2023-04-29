import React from 'react';
import { Link } from 'gatsby';
import { Col, Container, Row } from 'react-bootstrap';
import { Paragraph, BoxInner, LinkButton } from 'src/components/Box';
import Hero from 'src/components/Hero';
import image from 'src/assets/images/tours/CityTreeSite_Tours_01_Alex.jpeg';
import { formatPath } from 'src/utils';
import { PAGES } from 'src/constants';
import { Title } from './styles';

function Tours() {
  return (
    <Hero image={image} boxColor="#fff8dedd" anchor="tours" position="right">
      <Container className="tours">
        <Row>
          <Col xl={7} lg={6}>
            <BoxInner fullHeight>
              <Title>סיורים בדירה ובגינות העץ - ביקור בעולם אחר</Title>

              <Paragraph>
                הדרך הטובה ביותר להיחשף למחקר וליצירה שמתרחשים בעץבעיר כבר 15 שנים, הוא להגיע לסיור
                בעולם האמיתי."
              </Paragraph>
              <Paragraph>
                <b>מה מקבלים בסיור?</b> חוויה, ידע והשראה לחיים. איך מכינים קומפוסט בשיטות שונות,
                איך משיגים ומכינים מזון מיטיב, איך מטפחות גן עדן על מטר מרובע, איך חיים ביחד, איך
                מנקים את הבית מרעלים, ובשורה התחתונה - אם זה כל כך טוב למה זה נשאר בשוליים? במילים
                אחרות הדיון מכסה את כל הטווח שבין הפרקטיקה לפוליטיקה. החוויה מפעילה את כל החושים
                ומעוררת רגשות עזים לעיתים.
              </Paragraph>
              <Paragraph>
                <b>למי מתאים הסיור?</b> סטודנטיות, תלמידי בתי ספר, מכיניסטים, קורסי פרמקלצ'ר, ימי
                צוות, עובדות של משרדי ממשלה או תאגידים, זוגות או משפחות שחוגגות יום הולדת – תפתיעו
                אותנו!
              </Paragraph>
              <Paragraph>
                <b>מה גודל הקבוצה שהבית והגינות יכולים לארח?</b> קבוצות עד 15 אישה ואיש, קבוצה יותר
                גדולה אנחנו מפצלים לשתיים.
              </Paragraph>
              <Paragraph>
                <b>משך הסיור:</b> הסיורים אורכים בין חצי שעה לארבע שעות, ככל שיש יותר זמן ניתן לכלול
                יותר הדגמות מעשיות (מיני-סדנאות).
              </Paragraph>
              <Paragraph>
                <b>אנחנו מתאימים את התוכן ואת המחיר לדרישות וליכולות שלכם.</b>
              </Paragraph>
            </BoxInner>
          </Col>
          <Col xl={5} lg={6} className="side-column">
            <Row>
              <Col lg={6}>
                <BoxInner size="small" center fullHeight>
                  <Title>הרצאה של תמי צרי</Title>
                  <Paragraph grow>
                    קבוצות מאורגנות מטעם כל חברה או ארגון... סיור בבית ובגינות תפור למידות הקבוצה
                  </Paragraph>
                  <Paragraph weight={600} reverseUnderline>
                    <Link to={formatPath(PAGES.tamiLecture)}>לפרטים נוספים ...</Link>
                  </Paragraph>
                  <div>
                    <LinkButton href={PAGES.lecturesForm} target="_blank">
                      להזמנה
                    </LinkButton>
                  </div>
                </BoxInner>
              </Col>
              <Col lg={6}>
                <BoxInner size="small" center fullHeight>
                  <Title>הרצאה של עינת לסט</Title>
                  <Paragraph grow>
                    ביקור פרטי, קבוצה של חברים או משפחה, זוגות... סיור בבית ובגינות תפור למידתכן
                  </Paragraph>
                  <Paragraph weight={600} reverseUnderline>
                    <Link to={formatPath(PAGES.einatLecture)}>- לפרטים נוספים ...</Link>
                  </Paragraph>
                  <div>
                    <LinkButton href={PAGES.lecturesForm} target="_blank">
                      להזמנה
                    </LinkButton>
                  </div>
                </BoxInner>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <BoxInner size="small" center fullHeight>
                  <Title>סיור ליקוט עירוני</Title>
                  <Paragraph grow>
                    כל כמה שבועות אנחנו מוציאים סיור ליקוט סביב כיכר ביאליק בהדרכת ד״ר אלון אלירן.
                  </Paragraph>
                  <Paragraph weight={600} reverseUnderline>
                    <Link to={formatPath(PAGES.forageTours)}>- לפרטים נוספים ...</Link>
                  </Paragraph>
                  <div>
                    <LinkButton href={PAGES.lecturesForm} target="_blank">
                      להרשמה
                    </LinkButton>
                  </div>
                </BoxInner>
              </Col>
              <Col lg={6}>
                <BoxInner size="small" center fullHeight>
                  <Title>מיני-סדנאות והרצאות</Title>
                  <Paragraph grow>
                    כל כמה שבועות אנחנו מוציאים סיור כישוף ברחבי הדירה האקולוגית בהנחיית מכ' תמי
                    צרי.
                  </Paragraph>
                  <Paragraph weight={600} reverseUnderline>
                    <Link to={formatPath(PAGES.sessions)}>- לפרטים נוספים ...</Link>
                  </Paragraph>
                  <div>
                    <LinkButton href={PAGES.lecturesForm} target="_blank">
                      להרשמה
                    </LinkButton>
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

export default Tours;
