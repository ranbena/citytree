import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import SignUpButton from '../SignUpButton';
import { forEachMessage } from '../../../utils';

import { Wrapper, Container, Box, Title } from './styles';

const Learn: FC = () => {
  const intl = useIntl();

  return (
    <Wrapper>
      <Container>
        <Box xl={6} lg={7} sm={12}>
          <Title>
            <FormattedMessage id="abracadabra-he.learn.title" />
          </Title>
          {forEachMessage(intl, 'abracadabra-he.learn.text').map(([txt, key]) => (
            <p key={key}>{txt}</p>
          ))}
          <br />
          <SignUpButton />
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Learn;
