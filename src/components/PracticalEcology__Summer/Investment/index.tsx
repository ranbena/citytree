import React, { FC } from 'react';
import SignUpButton from '../SignUpButton';
import { Title } from '../styles';
import { Wrapper, Container, Tiers, Tier, Title as TierTitle, Price } from './styles';

const Investment: FC = () => (
  <Wrapper>
    <Container>
      <Title>מחיר סדרת הקיץ</Title>
      <p>
        תשלום חד פעמי מקנה לך את ״קישורית הקסם הקיצית״ שפותחת את הדלת לשיעורי הזום החיים. בנוסף,
        הנרשמות והנרשמים מקבלים עידכונים במייל ובווטצאפ אחרי כל שיעור, עם לינק להקלטת השיעור, ועוד
        חומרים תומכים.
      </p>
      <Tiers>
        <Tier>
          <TierTitle>מחיר להקלטת סדנה בודדת</TierTitle>
          <Price>20 ₪</Price>
        </Tier>
        <Tier>
          <TierTitle>מחיר להשתתפות בסדרה כולה</TierTitle>
          <Price>250 ₪</Price>
        </Tier>
        <Tier>
          <TierTitle>
            <strong>מחיר מיוחד</strong>
            <div>* למחבקות של העץ בפטראון</div>
          </TierTitle>
          <Price>150 ₪</Price>
        </Tier>
      </Tiers>
      <SignUpButton>להרשמה לסדנאות הקיץ</SignUpButton>
    </Container>
  </Wrapper>
);

export default Investment;
