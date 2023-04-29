import React, { FC } from 'react';
import { navigate } from 'gatsby';
import { PAGES } from 'src/constants';
import { Wrapper, Container, Box, Button, Title } from './styles';

const Winter: FC = () => (
  <Wrapper>
    <Container>
      <Box xl={7} sm={12}>
        <Title>סדרת סדנאות החורף</Title>
        <p>בעונת החורף 2020-21, בצל הקורונה, התקיימה הסדרה הראשונה של סדנאות הזום ״השיבה הביתה״.</p>
        <p>
          ב-18 סדנאות שחלפו ב״זמן שגשגנות״, ״זמן חקלאות״ ו״זמן טיפוח״, כיסינו נושאים מגוונים מסדנת
          מבוא ראשונה לקומפוסט, ועד סדנת ״ידידות עם החמה״ שבה למדנו איך להכין תכשיר הגנה מהשמש.{' '}
        </p>
        <p>
          כל הסדנאות הוקלטו וניתן לרכוש אותן כסדרה שלמה ב-150 ₪, או לבחור שיעור בודד במחיר של 20 ₪
        </p>
        <p>לעיון בתוכנייה המלאה של סדנאות החורף ולרכישת הקלטות, עיברו לדף סדנאות החורף.</p>
        <br />
        <br />
        <Button onClick={() => navigate(PAGES.practicalEcologyWinter)}>
          לפרטים ולרכישת הקלטות סדנאות החורף
        </Button>
      </Box>
    </Container>
  </Wrapper>
);

export default Winter;
