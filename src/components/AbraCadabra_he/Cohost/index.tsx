import React, { FC } from 'react';
import { whatsappLink } from 'src/constants';
import { Wrapper, Container, Box, Title } from './styles';

const Cohost: FC = () => (
  <Wrapper>
    <Container>
      <Box xl={6} lg={7} sm={12}>
        <Title>שוליית הקוסמת: עינת לסט</Title>
        <p>
          עינת היתה בדרך הבטוחה לחיים נורמליים להפליא, עם שירות צבאי מסודר ודרך סלולה ללימודי הנדסה.
          אבל אז משהו השתבש — אולי היה זה האקלים, אולי היתה זו האקולוגיה, אבל עינת החליטה לקחת את
          הזמן ולהתלמד בעץבעיר. היא הצטרפה כדיירת (״נדירה״), לחיי עץבעיר ב-2020.,
        </p>
        <p>
          מהר מאוד היא השתלבה בכל משימות הניהול השיווק והמכירות, וגם את הידיים היא מלכלכת לא מעט —
          באדמת הגינה, בדליי הבוקאשי, וגם במיטפח היא שולטת, מהכנת הלחם וארוחת הצהריים היומית ועד
          שבירת הצנצנת השבועית.
        </p>
        <p>עינת מתלווה לקורס הכישוף כעוזרת הוראה והיא הכתובת לכל שאלה טכנית, וגם לא טכנית.</p>
        <p>נסו אותה: {whatsappLink}</p>
      </Box>
    </Container>
  </Wrapper>
);

export default Cohost;
