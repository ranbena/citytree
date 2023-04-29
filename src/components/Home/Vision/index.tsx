import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Title, Paragraph, BoxInner, FloatBox } from 'src/components/Box';
import image from 'src/assets/images/vision_bg.jpeg';
import { formatPath } from 'src/utils';
import { ComingSoonModalProvider } from 'src/components/ComingSoonModal';
import { PAGES } from 'src/constants';
import { VisionHero } from './styles';

function Vision() {
  return (
    <ComingSoonModalProvider>
      {(showModal) => (
        <VisionHero image={image} boxColor="#b9d3d6dd" anchor="vision">
          <Container>
            <Row>
              <Col md={8} lg={7} xl={6}>
                <BoxInner className="vision-main">
                  <Title className="vision-title">עץ חולם עולם אחר שאפשרי</Title>

                  <Paragraph>
                    אנו רואות לנגד עינינו עולם שבו גופנו, ביתנו וכדור-הארץ כולו שבים ומקבלים
                    מהא'נשים יחס של כבוד וייראה, ככלים מקודשים לסביבות מחיה חיוניות שהחיים משגשגים
                    בהן במלואם. אנו מאחלות ומאחלים שבני-האדם ימצאו מחדש את מקומם בעולם, כשחוקי הטבע
                    משמשים להם כמדריך.
                  </Paragraph>
                  <Paragraph>
                    אנו רואות תרבות אנושית מחוברת ליסודות החיים: מוקירה את האדמה, מכבדת את המים,
                    חוגגת את האש ומעריכה את האוויר. בזמנים אלה של חוסר־ביטחון ואובדן־אמון, אנו
                    מקווים לימים שבהם תחושת הביטחון תנבע לא ממערכת של כסף אלא משפע של אהבה, חיבור
                    ובריאות. אנו רואות בעיני־רוחנו את הבתים מתמלאים מחדש בחיים ואותנו, הא'נשים,
                    חוזרים הביתה – אל החיבור הבלתי־אמצעי לכל מה שמזין אותנו – לטבע, למזון בריא
                    ומיטיב, לקהילה, לכל מה שחי סביבנו ובתוכנו. השיבה הביתה היא שיבה לאכפתיות, לטיפוח
                    הסביבה שלנו ולהרמוניה עם הפלנטה. הבה ונחזור לתפקידנו כשומרי החיים עלי אדמות.
                  </Paragraph>
                  <Paragraph>
                    <b>הבה ונשוב הביתה!</b>
                  </Paragraph>
                </BoxInner>
              </Col>
              <Col md={4} lg={5} xl={6} className="side-column">
                <Row>
                  <Col>
                    <FloatBox
                      position="top"
                      staticPosition
                      href={formatPath(PAGES.trees)}
                      onClick={showModal}
                    >
                      <Title>אחוות העצים</Title>
                      <Paragraph>
                        אחד החלומות של העץ קרם עור וגידים לרגע. ברגע ההוא למדנו המון על עצים...
                      </Paragraph>
                    </FloatBox>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FloatBox
                      position="center"
                      staticPosition
                      href={formatPath(PAGES.forestCity)}
                      onClick={showModal}
                    >
                      <Title>עיר־יער</Title>
                      <Paragraph>חזון שאנחנו שותפים לו וחולמים אותו לפרטי פרטים...</Paragraph>
                    </FloatBox>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FloatBox
                      position="bottom"
                      staticPosition
                      href={formatPath(PAGES.poetry)}
                      onClick={showModal}
                    >
                      <Title>שירת האלון</Title>
                      <Paragraph>
                        ד״ר אלון הוא גם משורר אקולוגי. מבחר משיריו מובא כאן בליווי צילומים של המכ'
                        תמי...
                      </Paragraph>
                    </FloatBox>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </VisionHero>
      )}
    </ComingSoonModalProvider>
  );
}

export default Vision;
