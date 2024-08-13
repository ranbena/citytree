import React, { FC } from 'react';
import { navigate } from 'gatsby';
import { PAGES } from 'src/constants';
import { Wrapper, Container, Box, Button, Title } from './styles';

const Summer: FC = () => (
  <Wrapper>
    <Container>
      <Box xl={7} sm={12}>
        <Title>סדרת סדנאות הקיץ מתחילה</Title>
        <p>סדרת סדנאות הקיץ תתחיל ב-5 באפריל, 2021.</p>
        <p>
          18 סדנאות חדשות שילוו אותנו לאורך ״זמן מועילות״, ״זמן תנועה״, ו״זמן הסתפקות״. ההרשמה
          נפתחה!
        </p>
        <p>
          כמו סדרת החורף, גם סדנאות הקיץ יוקלטו. ההקלטות יהיו זמינות לנרשמות לסדרה, או לרכישה
          כסדנאות בודדות.
        </p>
        <p>לעיון בתוכניית הקיץ ולהרשמה, עיברו לדף סדנאות הקיץ.</p>
        <br />
        <br />
        <Button onClick={() => navigate(PAGES.practicalEcologySummer)}>
          למידע ולהרשמה לסדנאות הקיץ
        </Button>
      </Box>
    </Container>
  </Wrapper>
);

export default Summer;
