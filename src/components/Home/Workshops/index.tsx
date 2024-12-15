import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Title, Paragraph, BoxInner, LinkButton } from 'src/components/Box';
import Hero from 'src/components/Hero';
import image from 'src/assets/images/coming_home_bg.jpeg';
import { PAGES, magicalEconomyUrl, collectionsURL } from 'src/constants';
import { formatPath } from 'src/utils';
import './styles.scss';

function Workshops() {
  return (
    <Hero image={image} boxColor="#c8dcf0d0" anchor="workshops">
      <Container className="workshops">
        <Row>
          <Col>
            <BoxInner>
              <center>
                <h1>תוכנית השיבה הביתה</h1>
              </center>
            </BoxInner>
          </Col>
        </Row>
      </Container>
      <br />
      <Container className="workshops">
        <Row>
          <Col lg={6}>
            <BoxInner>
              <Paragraph>
                איך להכין קומפוסט בשיטות שונות?
                <br /> מה אפשר ללקט ברחובות העיר?
                <br /> איך להשיג ולהכין מזון מיטיב?
                <br /> איך לטפח גינה אקולוגית?
                <br /> איך לחיות ביחד?
                <br /> איך לנקות את הבית מרעלים?
                <br /> ולבסוף – מדוע כל הדברים הטובים האלה נשארים בשוליים?
                <br />
              </Paragraph>
              <Paragraph>
                תוכנית השיבה הביתה מביאה את כל מה שלמדנו ב-15 שנות חיים בדירה האקולוגית. התוכנית
                מחזורית ומחולקת לסדרות על פי הזמנים והעונות. הלימוד מתרחש בעולם האמיתי ובזום וכן
                בחומרים מוקלטים, מצולמים וכתובים שכולם מרוכזים בעמוד של עץבעיר בפטראון. אפשר להצטרף
                ללימוד בכל עת.
              </Paragraph>
              <Paragraph>
                * המחבקות של העץ מקבלות גישה לכל חומרי התוכנית ולמפגשי הזום ללא תשלום נוסף. על
                המפגשים בעולם האמיתי הן מוזמנות לשלם כמה שמתאים להן.
              </Paragraph>
            </BoxInner>
            <br />
            <BoxInner>
              <LinkButton href={PAGES.virtual} bgcolor="#c8dcf0d0">
                <Title>כל הפרטים על תוכנית השיבה הביתה - כאן</Title>
              </LinkButton>
            </BoxInner>
          </Col>
          <Col lg={6}>
            <BoxInner>
              <a href={PAGES.virtual}>
                <Title>לימוד בזום</Title>
              </a>
              <Paragraph>
                זו ההתמחות של תמי מאז ימי הקורונה. היא מגישה את הידע המגוון שאספנו – מתולדות
                הפטריארכייה והדרכים לפירוקה ועד לקומפוסט (הממ... זה אותו דבר!) תמי לשירותכן אם
                החלטתן לנסות לעבור לצד השני של המראה.....
              </Paragraph>
            </BoxInner>
            <br />
            <BoxInner>
              <a href={PAGES.forageTours}>
                <Title>לימוד בעולם האמיתי</Title>
              </a>
              <Paragraph>
                סיורי ליקוט עם אלון מסביב לשנה, סדרת אדמה עם תמי בתל חובז – אנחנו אוהבות לפגוש
                א'נשים בתלת-ממד, ואפשר תמיד גם להזמין אותנו ללמד אצלכן בחצר או בקורס.
              </Paragraph>
            </BoxInner>
            <br />
            <BoxInner>
              <a href={collectionsURL}>
                <Title>לימוד עצמי</Title>
              </a>
              <Paragraph>
                בעמוד שלנו בפטראון תוכלו למצוא את כל חומרי הלימוד, מסודרים ב"אוספים" – תוכלו לרכוש
                כל אוסף לכשעצמו, בתשלום חד-פעמי או להצטרף בתשלום חודשי ולפתוח לכן את כל החומרים
                כולם.
              </Paragraph>
            </BoxInner>
          </Col>
        </Row>
      </Container>
    </Hero>
  );
}

export default Workshops;
