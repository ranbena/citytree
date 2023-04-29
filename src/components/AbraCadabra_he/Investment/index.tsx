import React, { FC } from 'react';
import SignUpButton from '../SignUpButton';
import { Wrapper, Container, Tiers, Tier, TierTitle, Price, Title } from './styles';

const Investment: FC = () => (
  <Wrapper>
    <Container>
      <Title>מחיר הקורס המוקלט</Title>
      <Tiers>
        <Tier>
          <TierTitle>
            <strong>מחיר תמיכה בהמשך</strong>
            <div>* למי שרוצה ויכולה לשלם יותר</div>
          </TierTitle>
          <Price>380 ₪</Price>
        </Tier>
        <Tier>
          <TierTitle>
            <strong>מחיר רגיל</strong>
            <div>* כאילו שיש דבר כזה בעולם</div>
          </TierTitle>
          <Price>280 ₪</Price>
        </Tier>
        <Tier>
          <TierTitle>
            <strong>מחיר מיוחד לפטרוניות</strong>
            <div>* למחבקות של העץ בפטראון</div>
          </TierTitle>
          <Price>180 ₪</Price>
        </Tier>
      </Tiers>
      <SignUpButton />
    </Container>
  </Wrapper>
);

export default Investment;
