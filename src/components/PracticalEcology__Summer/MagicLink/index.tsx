import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import SignUpButton from '../SignUpButton';
import { Wrapper } from './styles';

const Component: FC = () => (
  <Wrapper>
    <Container>
      <h3>18 סדנאות - קישורית קסם אחת - ניפגש בזום</h3>
      <p>בנוסף, כל סדנאות הקיץ מוקלטות וזמינות לנרשמות ולנרשמים לסדרה לצפייה בכל עת</p>
      <br />
      <br />
      <SignUpButton>להרשמה לסדנאות הקיץ</SignUpButton>
    </Container>
  </Wrapper>
);

export default Component;
