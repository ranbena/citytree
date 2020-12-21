import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { Button } from '../styles';
import { Wrapper } from './styles';

const Component: FC = () => (
  <Wrapper>
    <Container>
      <h3>QUESTIONS, COMMENTS, CONCERNS?</h3>
      <p>Just reach out, we’d love to talk!</p>
      <Button>Get in touch</Button>
    </Container>
  </Wrapper>
);

export default Component;
