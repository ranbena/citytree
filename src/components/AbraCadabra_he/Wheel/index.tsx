import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { forEachMessage } from 'src/utils';
import SignUpButton from '../SignUpButton';

import { Wrapper, Container, Title, Box } from './styles';

const Wheel: FC = () => {
  const intl = useIntl();
  return (
    <Wrapper>
      <Container>
        <Box xl={6} sm={12} transparent>
          <Title>
            <FormattedMessage id="abracadabra-he.wheel.title" />
          </Title>
          <div>
            {forEachMessage(intl, 'abracadabra-he.wheel.text').map(([txt, key]) => (
              <p key={key}>{txt}</p>
            ))}
          </div>
          <br />
          <SignUpButton />
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Wheel;
