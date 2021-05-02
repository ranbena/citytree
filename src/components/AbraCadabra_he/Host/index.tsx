import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { forEachMessage } from '../../../utils';

import { Wrapper, Container, Box, Title } from './styles';

const Host: FC = () => {
  const intl = useIntl();

  return (
    <Wrapper>
      <Container>
        <Box xl={5} lg={7} sm={12}>
          <Title>
            <FormattedMessage id="abracadabra-he.host.title" />
          </Title>
          {forEachMessage(intl, 'abracadabra-he.host.text').map(([txt, key]) => (
            <p key={key}>{txt}</p>
          ))}
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Host;
