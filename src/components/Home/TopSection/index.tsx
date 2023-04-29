import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LeafContainer from 'src/components/LeafContainer';
import './styles.scss';

const youtubeId = 'gZpRyenUgKw';

const TopSection: React.FC = () => (
  <section className="topSection" id="top">
    <LeafContainer>
      <Row className="row">
        <Col lg={6}>
          <iframe
            className="visual"
            allowFullScreen
            title="video"
            width="100%"
            height="350"
            src={`https://www.youtube.com/embed/${youtubeId}?origin=http://citytree.com&amp;playsinline=1&amp;color=white&amp;fs=1&amp;modestbranding=1`}
            frameBorder="0"
          />
        </Col>
        <Col lg={6} className="topSectionText">
          <h1>עץבעיר - מרכז ידע חי לאקולוגיה עמוקה ולחוסן אקלימי</h1>
          <p>
            בלב תל-אביב יש קרחת-בטון, ולצידה בניין ישן, ולידו עץ פיקוס עצום שגילו כגיל הבניין,
            ובצילו דירה, ובדירה א'נשים. הא'נשים האלה הם אנחנו: תמי ואלון, ואיתנו גם עינת ואבי, ועוד
            חברים מתלמדות ואורחות שפועלות במרחב האקולוגי שאנחנו יוצרות כאן.
          </p>
          <p>
            המרחב כולל דירת באוהאוס ייחודית שיתופית וכמובן אקולוגית להפליא, וגינות, גם הן אקולוגיות
            להפליא שאנחנו מטפחים סביב כיכר ביאליק. החיים שלנו הם מעשה של מחקר ואמנות, וכל פרט ביום
            יום שלנו הוא בסיס לידע שאנחנו משתפים - בסיורים, בהדרכה, בתיעוד ובכתיבה.
          </p>
          <p>
            אנו מגדירים מחדש את אורח־החיים העירוני כך שיגלם את ״העולם היפה יותר שלבבותנו יודעים
            שאפשרי״, עולם בריא של הרמוניה אנושית-טבעית מחודשת.
          </p>
          <p>בואו לסייר וללמוד מהעץ!</p>
        </Col>
      </Row>
    </LeafContainer>
  </section>
);

export default TopSection;
