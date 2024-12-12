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
                    אנו רואות לנגד עינינו עולם שבו גופנו, ביתנו וכדור-הארץ כולו שבים ומקבלים יחס של
                    כבוד וייראה, ככלים מקודשים לסביבות מחיה חיוניות שהחיים משגשגים בהן במלואם. אנו
                    נושאות תפילה שבני-האדם ימצאו מחדש את מקומם החיוני בעולם, כמטפחים, שומרים,
                    ומהללים של כל יסודות הטבע. אנחנו מבקשות שטבע תחזור להיות חוק.
                  </Paragraph>
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
                      target="_parteon"
                      // onClick={showModal}
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
                      position="bottom"
                      staticPosition
                      href={formatPath(PAGES.poetry)}
                      // onClick={showModal}
                      target="_parteon"
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
