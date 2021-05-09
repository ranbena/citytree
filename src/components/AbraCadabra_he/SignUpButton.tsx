import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { FC, PropsWithChildren } from 'react';
import { Button } from './styles';

// eslint-disable-next-line operator-linebreak
const formUrl =
  'https://docs.google.com/document/d/1FXW_Wekv2h4NufrYhCjA28oLwmGLgrqTDiGag88CCBY/preview';

const SignUpButton: FC<PropsWithChildren<{ url?: string | null }>> = ({ url, children }) => {
  const onClick = url === null ? undefined : () => window.open(url || formUrl);
  return (
    <Button onClick={onClick}>
      {children || <FormattedMessage id="abracadabra-he.signupnow" />}
      <strong>
        <FormattedMessage id="abracadabra-he.name" />!
      </strong>
    </Button>
  );
};

export default SignUpButton;
