import { FormattedMessage } from 'gatsby-plugin-intl';
import React, { FC, PropsWithChildren } from 'react';
import { Button } from './styles';

const formUrl = 'https://forms.gle/cLW9GkmKsF9szPpt7';

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
