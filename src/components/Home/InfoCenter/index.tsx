import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import { Title, Paragraph, FloatBox } from 'src/components/Box';
import image from 'src/assets/images/info_bg.jpeg';
import { PAGES, papersUrl, podcastUrl, youtubeUrl, collectionsURL } from 'src/constants';
import { ComingSoonModalProvider } from 'src/components/ComingSoonModal';
import { formatPath } from 'src/utils';
import { InfoCenterHero } from './styles';

function InfoCenter() {
  return (
    <ComingSoonModalProvider>
      {(showModal) => (
        <InfoCenterHero image={image} boxColor="#c9ddc9cc" anchor="info">
          <Container className="infoCenterContainer">
            <FloatBox position="center" href={collectionsURL} target="_patreon">
              <Title>מרכז ידע</Title>
              <Paragraph>
                לכל מי שרוצה להתעמק בידע שנצבר בעץבעיר, בדעה וברעיונות שאנחנו מייצגים – אנחנו פותחות
                כאן הרבה ממה שהיה במגירה עד כה, להעמקה בזמנכן ולפי נושאי העניין שלכן.
              </Paragraph>
            </FloatBox>

            <FloatBox position="topRight" href={podcastUrl} target="_patreon">
              <Title>במשעול הצר</Title>
              <Paragraph>ההסכת של עץבעיר</Paragraph>
            </FloatBox>

            <FloatBox position="right">
              <Title>מניפסטים</Title>
              <Paragraph>דפים לתיקון עולם</Paragraph>
            </FloatBox>

            <FloatBox position="bottomRight" href={papersUrl} target="_patreon">
              <Title>הגות</Title>
              <Paragraph>ממשק הבית האקולוגי ועד פוסטקפיטליזם</Paragraph>
            </FloatBox>

            <FloatBox position="bottom">
              <Title>מקורות</Title>
              <Paragraph>רשימת הספרים ומקורות הידע המועדפים של העץ</Paragraph>
            </FloatBox>

            <FloatBox position="left">
              <Title>מילון</Title>
              <Paragraph>חידושי מילים והגיגים על שפה</Paragraph>
            </FloatBox>

            <FloatBox position="topLeft" href={youtubeUrl} target="_youtube">
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
