import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { navigate } from 'gatsby';
import { forEachMessage } from '../../../utils';
import { Wrapper, Container, Box, Button, Title } from './styles';

const Summer: FC = () => {
  const intl = useIntl();

  return (
    <Wrapper>
      <Container>
        <Box xl={8} sm={12}>
          <Title>
            <FormattedMessage id="practical-ecology-winter.summer.title" />
          </Title>
          {forEachMessage(intl, 'practical-ecology-winter.summer.text').map(([txt, key]) => (
            <p key={key}>{txt}</p>
          ))}
          <br />
          <Button onClick={() => navigate('/practical-ecology-summer')}>
            <FormattedMessage id="practical-ecology-winter.summer.button" />
          </Button>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Summer;
