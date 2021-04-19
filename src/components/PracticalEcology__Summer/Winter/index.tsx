import React, { FC } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { navigate } from 'gatsby';
import { forEachMessage } from '../../../utils';
import { Title } from '../styles';
import { Wrapper, Container, Box, Button } from './styles';

const Winter: FC = () => {
  const intl = useIntl();

  return (
    <Wrapper>
      <Container>
        <Box xl={8} sm={12}>
          <Title>
            <FormattedMessage id="practical-ecology-summer.winter.title" />
          </Title>
          {forEachMessage(intl, 'practical-ecology-summer.winter.text').map(([txt, key]) => (
            <p key={key}>{txt}</p>
          ))}
          <br />
          <Button onClick={() => navigate('/practical-ecology-winter')}>
            <FormattedMessage id="practical-ecology-summer.winter.button" />
          </Button>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Winter;
