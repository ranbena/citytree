import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Title, Paragraph, BoxInner, LinkButton } from 'src/components/Box';
import Hero from 'src/components/Hero';
import image from 'src/assets/images/workshops_bg.jpeg';
import { PAGES } from 'src/constants';
import { formatPath } from 'src/utils';
import './styles.scss';

function Workshops() {
  return (
    <Hero image={image} boxColor="#c8dcf0d0" anchor="workshops">
      <Container className="workshops">
        <Row>
          <Col lg={6}>
            <BoxInner>
              <Title>קורסים וסדנאות - ללמוד בעץ</Title>
              <Paragraph>
                יותר מכל דבר אחר, עץבעיר הוא מרכז ידע. כאן אנחנו מציעות לכן סדנאות, קורסים ולימוד
                בפורמט דיגיטלי. ההקלטות וכל החומרים הנלווים מאוגדים כאן וניתנים לרכישה."
              </Paragraph>
              <Paragraph>
                <b>סדנאות באקולוגיה מעשית</b> – שנים רבות תמי ואלון חוקרים וחיים אקולוגיה בעולם
                האמיתי; תמי מלמדת את משק הבית האקולוגי, ואלון מדריך סיורי ליקוט ואת העבודה בגינות.
                הידע שלנו זמין גם ברשת; חפשו את סדרת סרטוני{' '}
                <a
                  href="https://www.youtube.com/playlist?list=PLrFnw7knHerdSveoSHivFNRfUNCBEpEQd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ״השיבה הביתה״ ביוטיוב
                </a>{' '}
                של העץ, וכאן תוכלו לרכוש סדנאות זום מוקלטות.
              </Paragraph>
              <Paragraph>
                <b>לימוד</b> עם השנים המחקר המעשי של עץבעיר העמיק, וכיום אנחנו מתמקדים בלימוד
                אקולוגיה עמוקה ודיון בדבר השינוי המערכתי הרדיקלי הנדרש כל-כך. תופתעו לראות את
                המיתוסים שעליהם כולנו גדלנו מתנפצים בזה אחר זה ומוחלפים בסיפורים חדשים (חדשים-ישנים)
                ומועילים. אנחנו עושים זאת על-ידי שילוב בין תחומים שונים ומגוונים – מהיסטוריה עד
                אקו-פמיניזם, דרך ביקורת המקרא, כלכלה, אנתרופולוגיה, אנרכיזם ופוסטקפיטליזם.
              </Paragraph>
              <Paragraph>
                תמי היא הדוברת והמגישה הראשית של הלימוד. היא מגישה את הדברים בדרכה הקולחת,
                האסוציאטיבית והיצירתית, בליווי מצגות ייחודיות. בהצטרפות למעגל התמיכה של העץ בפטראון,
                תקבלו גישה למפגשי לימוד חודשיים ולכל החומרים הנלווים שתמי מפרסמת.
              </Paragraph>
            </BoxInner>
          </Col>
          <Col lg={6} className="side-column">
            <Row>
              <Col>
                <BoxInner size="small">
                  <Title>סדנאות זום באקולוגיה מעשית</Title>
                  <Paragraph>
                    סדנאות זום מוקלטות, כל סדנה באורך של כשעה וחצי, מלווה במצגת ברורה ובהנחיה של
                    תמי. כל סדנה מוקדשת לנושא אחד, מסבון ועד קומפוסט, ומספקת את כל המידע המעשי בנוסף
                    להגיגים, ביקורת וצחוקים. כל הקלטה עולה 20 ₪, ויש גם חבילות על-פי נושא.
                  </Paragraph>
                  <div>
                    <LinkButton href={formatPath(PAGES.practicalEcologySummer)}>
                      לקטלוג הסדנאות ולרכישה
                    </LinkButton>
                  </div>
                </BoxInner>
              </Col>
            </Row>
            <Row>
              <Col>
                <BoxInner size="small">
                  <Title>קורס כישוף, אקולוגיה עמוקה ושובה של האלה</Title>
                  <Paragraph>
                    הקלטת 8 שיעורי זום שפותחים את השער לעולם האקו-פמיניזם, אקולוגיה כמעשה כישוף
                    וניתוץ הפטריארכיה. שילוב של הרוח עם הקרקע בחיי היום-יום, מתכונים והוראות הפעלה
                    למכשפה שבתוכנו. השיעורים מלווים במצגות מרהיבות, ובהנחיה הסוחפת של תמי.
                  </Paragraph>
                  <div>
                    <LinkButton href={formatPath(PAGES.abracadabra)}>לרכישת הקורס</LinkButton>
                  </div>
                </BoxInner>
              </Col>
            </Row>
            <Row>
              <Col>
                <BoxInner size="small">
                  <Title>מחזור לימוד 1: כלכלת קסם</Title>
                  <Paragraph>
                    אי-אפשר להציל את העולם מבלי לדבר על הכלכלה הקפיטליסטית ולשנות אותה מהיסוד. נשמע
                    אתגרי? תמי יצאה למסע מחקר בכל-זאת. את המחקר שלה היא חושפת למעגל המחבקות, תוך-כדי
                    התהליך. 13 מפגשים חודשיים בזום, 13 פרקים כתובים, שצוללים אל תוך היסטוריה מורכבת
                    ואפלה, עם הרבה הפניות למקורות בנושאי כלכלה ומיתוס. לבסוף, תמי לא מתביישת להציף
                    כיוונים לכלכלה אחרת שאפשרית – שהייתה ושתהיה.
                  </Paragraph>
                  <div>
                    <LinkButton href={PAGES.magicalEconomy} target="_blank">
                      לפרטים
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

export default Workshops;
