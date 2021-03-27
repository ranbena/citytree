import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { FormattedMessage } from 'gatsby-plugin-intl';
import SignUpButton from '../SignUpButton';
import { Wrapper } from './styles';

const Component: FC = () => (
  <Wrapper>
    <Container>
      <h3>
        <FormattedMessage id="practical-ecology-summer.magiclink.title1" />
        <span>
          <FormattedMessage id="practical-ecology-summer.magiclink.title2" />
        </span>
      </h3>
      <p>
        <FormattedMessage id="practical-ecology-summer.magiclink.text" />
      </p>
      <SignUpButton>
        <FormattedMessage id="practical-ecology-summer.magiclink.button" />
      </SignUpButton>
    </Container>
  </Wrapper>
);

export default Component;
