import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import React, { FC, PropsWithChildren } from 'react';
import { Button } from './styles';

const formUrl = 'https://forms.gle/cLW9GkmKsF9szPpt7';

const SignUpButton: FC<PropsWithChildren<{ url?: string | null }>> = ({ url, children }) => {
  const { formatMessage } = useIntl();
  const onClick = url === null ? undefined : () => window.open(url || formUrl);
  const title = formatMessage({ id: 'abracadabra-he.name' }).replace(/[\u0591-\u05C7]/g, '');
  return (
    <Button onClick={onClick}>
      {children || <FormattedMessage id="abracadabra-he.signupnow" />}
      <strong>{title}!</strong>
    </Button>
  );
};

export default SignUpButton;
