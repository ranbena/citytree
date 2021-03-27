import React, { FC } from 'react';

import { Container } from 'react-bootstrap';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { Wrapper, Title, SubTitle } from './styles';

const TopSection: FC = () => {
  const { locale } = useIntl();

  return (
    <Wrapper $locale={locale}>
      <Container>
        <Title>
          <FormattedMessage id="practical-ecology-winter.title" />
        </Title>
        <SubTitle>
          <FormattedMessage id="practical-ecology-winter.subtitle" />
        </SubTitle>
      </Container>
    </Wrapper>
  );
};

export default TopSection;
