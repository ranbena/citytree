import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { FormattedMessage } from 'gatsby-plugin-intl';
import SignUpButton from '../SignUpButton';
import { Wrapper } from './styles';

const Component: FC = () => (
  <Wrapper>
    <Container>
      <h3>
        <FormattedMessage id="practical-ecology-summer.magiclink.title" />
      </h3>
      <p>
        <FormattedMessage id="practical-ecology-summer.magiclink.text" />
      </p>
      <br />
      <br />
      <SignUpButton>
        <FormattedMessage id="practical-ecology-summer.magiclink.button" />
      </SignUpButton>
    </Container>
  </Wrapper>
);

export default Component;
