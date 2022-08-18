import React, { FC, useState } from 'react';
import { Container } from 'react-bootstrap';
import ContactModal from '../ContactModal';
import { Button } from '../styles';
import { Wrapper } from './styles';

const Component: FC = () => {
  const [show, setShow] = useState(false);

  return (
    <Wrapper>
      <Container>
        <h3>QUESTIONS, COMMENTS, CONCERNS?</h3>
        <p>Just reach out, we’d love to talk!</p>
        <Button onClick={() => setShow(true)}>Get in touch</Button>
        <ContactModal show={show} hide={() => setShow(false)} />
      </Container>
    </Wrapper>
  );
};

export default Component;
