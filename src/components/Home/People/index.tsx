import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Title, Paragraph, BoxInner, FloatBox } from 'src/components/Box';
import image from 'src/assets/images/ppl_bg.jpeg';
import tami_image from 'src/assets/images/tami.png';
import alon_image from 'src/assets/images/alon.png';
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
                    {/* <FloatBox
                      position="center"
                      staticPosition
                      // href={formatPath(PAGES.money)}
                      // onClick={showModal}
                    >
                      <Title>תמי צרי</Title>
                      <Paragraph>כמה מילים על תמי צרי</Paragraph>
                    </FloatBox> */}
                  </Col>
                </Row>

                <BoxInner className="people-main">
                  <center>
                    <Title className="people-title">תמי צרי</Title>
                  </center>
                  <img src={tami_image} alt="תמי צרי" />
                  <br></br>
                  <Paragraph>
                    הקימה את עץבעיר ב-2006, מורדת סדרתית, אמנית, בוגרת בצלאל, עמיתת מרכז השל ואשת
                    פרמקלצ'ר, וממובילות קהילת הקיימות בישראל.
                    <br></br>
                    הצלמת והמעצבת הרשמית של "העץ", חוקרת ומתנסה, כותבת וממציאה, עורכת ומחפשת את הדרך
                    למימוש החזון האקולוגי בחיי היום-יום.
                    <br></br>
                    מלמדת את החיבור מחדש אל האדמה, אל הנשי ואל הקהילה, דרך
                    ביקורת-קפיטליזם/פטריארכיה, ודרך הפרקטיקות של משק הבית האקולוגי - השיבה הביתה,
                    במפגשי זום ובעולם האמיתי.
                  </Paragraph>
                </BoxInner>
              </Col>
              <Col md={8} lg={7} xl={6} className="side-column">
                {/* <Row>
                  <Col>
                    <FloatBox position="center" staticPosition>
                      <Title>אלון אלירן</Title>
                      <Paragraph>כמה מילים על אלון אלירן </Paragraph>
                    </FloatBox>
                  </Col>
                </Row> */}

                <BoxInner className="people-main">
                  <center>
                    <Title className="people-title">אלון אלירן</Title>
                  </center>
                  <img src={alon_image} alt="אלון אלירן" />
                  <br></br>
                  <Paragraph>
                    שותף לעשייה וללימוד בעץבעיר מ-2008, חלש על העבודה בגינות הדגם
                    הקהילתיות-אקולוגיות שהעץ טיפח סביב כיכר ביאליק, וממשיך להוביל ללא לאות את סיורי
                    הליקוט העירוני של עץבעיר.
                    <br></br>
                    פעיל חברתי-סביבתי נמרץ, דוקטור למדעי הסביבה, איש המילה והמדע של "העץ", משורר
                    אקולוגי, ממשיך להיות חבר בכל פורום עירוני סביבתי וקהילתי (כמעט), לפעול בגינה
                    הקהילתית של מעוז אביב ולטפח גינות ירק בכל מקום שהוא רק יכול.
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
