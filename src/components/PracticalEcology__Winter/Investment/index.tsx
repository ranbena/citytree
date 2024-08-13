import React, { FC } from 'react';
import SignUpButton from '../SignUpButton';
import { Wrapper, Container, Tiers, Tier, Title, TierTitle, Price } from './styles';

const Investment: FC = () => (
  <Wrapper>
    <Container>
      <Title>רכישת הקלטות סדנאות החורף</Title>
      <p>
        מלאו את טופס הרכישה ונישלח אליכם את הקישוריות לסדנאות בודדות, או לסדרה כולה, על פי בחירתכן.
        כמו תמיד, פטרוניות ופטרונים יכולים לשלם פחות, כמו גם מי שמתקשה כלכלית - כל האפשרויות בטופס.
      </p>
      <Tiers>
        <Tier>
          <TierTitle>מחיר להקלטת סדנה בודדת</TierTitle>
          <Price>20 ₪</Price>
        </Tier>
        <Tier>
          <TierTitle>מחיר להקלטות סדרת החורף כולה</TierTitle>
          <Price>150 ₪</Price>
        </Tier>
        <Tier>
          <TierTitle>
            <strong>מחיר מיוחד לפטרונים</strong>
            <div>* למחבקות של העץ בפטראון</div>
          </TierTitle>
          <Price>100 ₪</Price>
        </Tier>
      </Tiers>
      <SignUpButton>לרכישת הקלטות סדנאות החורף</SignUpButton>
    </Container>
  </Wrapper>
);

export default Investment;
