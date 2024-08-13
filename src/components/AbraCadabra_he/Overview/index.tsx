import React, { FC } from 'react';
import SignUpButton from '../SignUpButton';
import { Title } from '../styles';
import { Wrapper, Container, Box, BottomPart } from './styles';

const Overview: FC = () => (
  <Wrapper>
    <Container>
      <Box xl={7} md={10} sm={12}>
        <Title>שובה של האלה?</Title>
        <p>
          זה אלפי שנים האנושות מנסה את הסדר הפטריארכלי, ומה נאמר? זה לא הולך כל-כך טוב, וכרגע אנו
          במשבר גדול. משהו חסר, ונדרש תיקון יסודי.
        </p>
        <p>שינוי עולם מבקש שינוי סדרי עולם.</p>
        <p>
          כשאנחנו מחזירות את האלה, אנחנו מחזירות את הסדר של אימא לעולם, את הכוח שלנו ליצור ולפעול
          בהרמוניה ואת הרוך שנפקד מעולמנו. אנחנו לא מגרשות את האל! אנחנו רק מורידות אותו מכיסאו הרם,
          בחזרה אל האדמה, ומזמינות אותו לשחק יחד, על פי חוקיה של טבע.
        </p>
        <p>
          כדי להשיב לעולמנו את יופיו, אנחנו יוצאות למסע גילוי של כוחותינו הנסתרים. אנו צוללות
          לסיפורים שלא סופרו על סדרי עולם קדומים ומספרות סיפור חדש על עולם יפה יותר שרְחָמֵינוּ
          יודעות שאפשרי.
        </p>
        <BottomPart>
          <p>
            <strong>המחזור האחרון התקיים בעברית בקיץ 2021 וזמין לרכישה.</strong>
          </p>
          <p>* בחורף 2020 התקיים המחזור הראשון, באנגלית, וגם הוא זמין לרכישה.</p>
        </BottomPart>
        <SignUpButton />
      </Box>
    </Container>
  </Wrapper>
);

export default Overview;
