import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { FC } from 'react';
import { Button } from './styles';

// eslint-disable-next-line operator-linebreak
const formUrl =
  'https://docs.google.com/document/d/1FXW_Wekv2h4NufrYhCjA28oLwmGLgrqTDiGag88CCBY/preview';

const SignUpButton: FC = () => (
  <Button onClick={() => window.open(formUrl)}>
    <FormattedMessage id="abracadabra-he.signupnow" />
    <strong>
      <FormattedMessage id="abracadabra-he.name" />!
    </strong>
  </Button>
);

export default SignUpButton;
