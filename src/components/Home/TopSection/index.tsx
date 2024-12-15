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
          <h1>עץבעיר - מרכז ידע חי לאקולוגיה עמוקה </h1>
          <p>
            בלב תל-אביב יש קרחת בטון, ולצדה שני בניינים ישנים, וביניהם עץ פיקוס עצום, ובצילו, בשלוש
            דירות שונות, היינו אנו, תמי צרי וד"ר אלון אלירן, מאז 2008. חברים, מתלמדות ואורחות פעלו
            איתנו במרחב האקולוגי שטיפחנו במשך השנים. בקיץ 2022 עיריית תל-אביב נכנסה במלוא הכוח
            השיפוצי-קפיטליסטי לכיכר, ואנחנו הרגשנו שאין לנו שם מקום יותר. גורשנו בכוח הרעש, האבק
            וההתעלמות.
          </p>
          <p>
            עברנו לגור עם ההורים לתקופת התארגנות, וגילינו שזה הפרק החדש שלנו – פרק ההורים. החיים
            והמחקר המשותפים שלנו נמשכים, ואנחנו מציעות את הלימוד של משק הבית, הגינות האקולוגיות
            והחיים השיתופיים שלנו, במסגרת "תוכנית השיבה הביתה". אורח החיים שלנו ממשיך לאתגר את
            אורח-החיים העירוני המקובל, ואנו ממשיכות ללמוד וללמד איך אפשר לממש את "העולם היפה יותר
            שלבבותינו יודעים שאפשרי", עולם בריא של הרמוניה אנושית-טבעית מחודשת, בחיים שלנו כפי שהם,
            ובמודעות מלאה לפריווילגיה העצומה שלנו. החיים שלנו הם מעשה של מחקר, שיתוף ואומנות, וכל
            פרט ביום-יום שלנו הוא בסיס לידע שאנחנו משתפים – בסיורי הליקוט של אלון, בשיעורי הזום של
            תמי, בהרצאות, בצילום, בכתיבה ובשירה.
          </p>
        </Col>
      </Row>
    </LeafContainer>
  </section>
);

export default TopSection;
