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
          <span>
            <SignUpButton url="https://docs.google.com/document/d/1FXW_Wekv2h4NufrYhCjA28oLwmGLgrqTDiGag88CCBY/preview">
              <FormattedMessage id="abracadabra-he.learn.button" />
            </SignUpButton>
          </span>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Learn;
