import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { forEachMessage } from '../../../utils';

import { Wrapper, Container, Box, Title } from './styles';

const Cohost: FC = () => {
  const intl = useIntl();

  return (
    <Wrapper>
      <Container>
        <Box xl={5} lg={7} sm={12}>
          <Title>
            <FormattedMessage id="abracadabra-he.cohost.title" />
          </Title>
          {forEachMessage(intl, 'abracadabra-he.cohost.text').map(([txt, key]) => (
            <p key={key}>{txt}</p>
          ))}
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Cohost;
