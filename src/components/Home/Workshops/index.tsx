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
          <Col lg={6}>
            <BoxInner>
              <Title>תוכנית השיבה הביתה</Title>
              <Paragraph>
                איך להכין קומפוסט בשיטות שונות? מה אפשר ללקט ברחובות העיר? איך להשיג ולהכין מזון
                מיטיב? איך לטפח גינה אקולוגית? איך לחיות ביחד? איך לנקות את הבית מרעלים? ולבסוף –
                מדוע כל הדברים הטובים האלה נשארים בשוליים?
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
          </Col>
          <Col lg={6}>
            <BoxInner>
              <LinkButton href={PAGES.virtual} bgcolor="#c8dcf0d0">
                <Title>לימוד בזום</Title>
              </LinkButton>
              <Paragraph>
                זו ההתמחות של תמי מאז ימי הקורונה. היא מגישה את הידע המגוון שאספנו – מתולדות
                הפטריארכייה והדרכים לפירוקה ועד לקומפוסט (הממ... זה אותו דבר!) תמי לשירותכן אם
                החלטתן לנסות לעבור לצד השני של המראה.....
              </Paragraph>
            </BoxInner>
          </Col>
          <Col lg={6}>
            <BoxInner>
              <LinkButton href={PAGES.forageTours}>
                <Title>לימוד בעולם האמיתי</Title>
              </LinkButton>
              <Paragraph>
                סיורי ליקוט עם אלון מסביב לשנה, סדרת אדמה עם תמי בתל חובז – אנחנו אוהבות לפגוש
                א'נשים בתלת-ממד, ואפשר תמיד גם להזמין אותנו ללמד אצלכן בחצר או בקורס.
              </Paragraph>
            </BoxInner>
          </Col>
          <Col lg={6}>
            <BoxInner>
              <LinkButton href={collectionsURL}>
                <Title>לימוד עצמי</Title>
              </LinkButton>
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
