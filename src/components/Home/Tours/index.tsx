import React from 'react';
import { Link } from 'gatsby';
import { Col, Container, Row } from 'react-bootstrap';
import { Paragraph, BoxInner, LinkButton } from 'src/components/Box';
import Hero from 'src/components/Hero';
import image from 'src/assets/images/tours/CityTreeSite_Tours_01_Alex.jpeg';
import { formatPath } from 'src/utils';
import { PAGES, einatPhoneLink, tamiPhoneLink } from 'src/constants';
import { Title } from './styles';

function Tours() {
  return (
    <Hero image={image} boxColor="#fff8dedd" anchor="tours" position="right">
      <Container className="tours">
        <Row>
          <Col xl={6}>
            <BoxInner fullHeight>
              <Title>לימוד בעולם האמיתי – הרצאות, סיורים וסדנאות</Title>

              <Paragraph>
                איך מכינים קומפוסט בשיטות שונות? איך משיגים ומכינים מזון מיטיב? איך מטפחות גינה
                אקולוגית? מה מלקטים בעיר? איך חיים ביחד? איך מנקים את הבית מרעלים? ולבסוף – אם זה
                טוב כל-כך, מדוע זה נשאר בשוליים?
              </Paragraph>
              <Paragraph>הדרך הטובה ביותר להיחשף לידע שלנו היא… לפגוש אותנו!</Paragraph>
              <Paragraph>
                במשך 16 שנים חיינו יחדיו בדירה האקולוגית להפליא של עץבעיר, שם חקרנו והתנסינו, ושם
                פגשנו את מי שרצו להיחשף לידע ולנסיון שצברנו. במרץ 2023 עזבנו את כיכר ביאליק והתחלנו
                פרק חדש שפותח לנו אפשרויות חדשות למפגש.
              </Paragraph>
              <Paragraph>
                במשך 16 שנים חיינו יחדיו בדירה האקולוגית להפליא של עץבעיר, שם חקרנו והתנסינו, ושם
                פגשנו את מי שרצו להיחשף לידע ולנסיון שצברנו. במרץ 2023 עזבנו את כיכר ביאליק והתחלנו
                פרק חדש שפותח לנו אפשרויות חדשות למפגש.
              </Paragraph>
              <Paragraph>
                נשמח לשמוע מכן, בטלפון/וואטסאפ: {tamiPhoneLink} (תמי) או {einatPhoneLink} (עינת)
              </Paragraph>
              <Paragraph>
                <b>דפדפו ותמצאו את ההרצאה או הסיור שמתאים לכן.</b>
              </Paragraph>
            </BoxInner>
          </Col>
          <Col xl={6} className="side-column">
            <Row>
              <Col lg={6}>
                <BoxInner size="small" center fullHeight>
                  <Title>סיורי ליקוט</Title>
                  <Paragraph grow>
                    סיור עם ד"ר אלון אלירן על פי הזמנתכן – בגינות ובין הבניינים…
                  </Paragraph>
                  <Paragraph weight={600} reverseUnderline>
                    <Link to={formatPath(PAGES.forageTours)}>לפרטים נוספים...</Link>
                  </Paragraph>
                  <div>
                    <LinkButton href={PAGES.urbanForagingSeries} target="_blank">
                      להרשמה
                    </LinkButton>
                  </div>
                </BoxInner>
              </Col>
              <Col lg={6}>
                <BoxInner size="small" center fullHeight>
                  <Title>הרצאה מאת תמי</Title>
                  <Paragraph grow>
                    תמי צרי משתפת מנסיונה והתובנות שלה מהחיים בכיכר ביאליק ובכלל.
                  </Paragraph>
                  <Paragraph weight={600} reverseUnderline>
                    <Link to={formatPath(PAGES.tamiLecture)}>לפרטים נוספים...</Link>
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
                  <Title>הרצאה של עינת לסט</Title>
                  <Paragraph grow>
                    עינת לסט מספרת על חייה בעץבעיר ועל מסע החיפוש שלה אחרי דרכה.
                  </Paragraph>
                  <Paragraph weight={600} reverseUnderline>
                    <Link to={formatPath(PAGES.einatLecture)}>לפרטים נוספים...</Link>
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
                  <Title>עושות חיים בתל חובז׳</Title>
                  <Paragraph grow>סדרת עושות חיים בבית מתארחת בתל חובז׳ בתל אביב</Paragraph>
                  {/* <Paragraph weight={600} reverseUnderline>
                    <Link to={formatPath(PAGES.virtual)}>לפרטים נוספים...</Link>
                  </Paragraph> */}
                  <div>
                    <LinkButton>בקרוב...</LinkButton>
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
