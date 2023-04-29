import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import { Title, Paragraph, FloatBox } from 'src/components/Box';
import image from 'src/assets/images/info_bg.jpeg';
import { PAGES, youtubeUrl } from 'src/constants';
import { ComingSoonModalProvider } from 'src/components/ComingSoonModal';
import { formatPath } from 'src/utils';
import { InfoCenterHero } from './styles';

function InfoCenter() {
  return (
    <ComingSoonModalProvider>
      {(showModal) => (
        <InfoCenterHero image={image} boxColor="#c9ddc9cc" anchor="info">
          <Container className="infoCenterContainer">
            <FloatBox position="center">
              <Title>מרכז ידע</Title>
              <Paragraph>
                לכל מי שרוצה להתעמק בידע שנצבר בעץבעיר, בדעה וברעיונות שאנחנו מייצגים – אנחנו פותחות
                כאן הרבה ממה שהיה במגירה עד כה, להעמקה בזמנכן ולפי נושאי העניין שלכן.
                <span className="inner-links">
                  <Link to={PAGES.blog} onClick={showModal}>
                    רשומות
                  </Link>
                  <br />
                  <Link to={PAGES.manifestos} onClick={showModal}>
                    הבלוג של א'נשות העץ
                  </Link>
                  <br />
                  <Link to={PAGES.articles} onClick={showModal}>
                    מאמרים
                  </Link>
                  <br />
                  <Link to={PAGES.references} onClick={showModal}>
                    מקורות
                  </Link>
                  <br />
                  <Link to={PAGES.glossary} onClick={showModal}>
                    מילון
                  </Link>
                  <br />
                  <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                    סרטונים
                  </a>
                </span>
              </Paragraph>
            </FloatBox>

            <FloatBox position="topRight" href={formatPath(PAGES.blog)} onClick={showModal}>
              <Title>רשומות</Title>
              <Paragraph>הבלוג של א'נשות העץ</Paragraph>
            </FloatBox>

            <FloatBox position="right" href={formatPath(PAGES.manifestos)} onClick={showModal}>
              <Title>מניפסטים</Title>
              <Paragraph>דפים לתיקון עולם</Paragraph>
            </FloatBox>

            <FloatBox position="bottomRight" href={formatPath(PAGES.articles)} onClick={showModal}>
              <Title>מאמרים</Title>
              <Paragraph>ממשק הבית האקולוגי ועד פוסטקפיטליזם</Paragraph>
            </FloatBox>

            <FloatBox position="bottom" href={formatPath(PAGES.references)} onClick={showModal}>
              <Title>מקורות</Title>
              <Paragraph>רשימת הספרים ומקורות הידע המועדפים של העץ</Paragraph>
            </FloatBox>

            <FloatBox position="left" href={formatPath(PAGES.glossary)} onClick={showModal}>
              <Title>מילון</Title>
              <Paragraph>חידושי מילים והגיגים על שפה</Paragraph>
            </FloatBox>

            <FloatBox position="topLeft" href={youtubeUrl} target="_blank">
              <Title>סרטונים</Title>
              <Paragraph>סדרת סרטוני ״השיבה הביתה״ ועוד, בערוץ יוטיוב של העץ</Paragraph>
            </FloatBox>
          </Container>
        </InfoCenterHero>
      )}
    </ComingSoonModalProvider>
  );
}

export default InfoCenter;
