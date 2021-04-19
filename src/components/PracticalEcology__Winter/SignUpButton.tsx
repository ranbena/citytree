import React, { FC } from 'react';
import { Button } from './styles';

// eslint-disable-next-line operator-linebreak
const formUrl = 'https://forms.gle/MSp62MWuE6ZEzPhG6';

const SignUpButton: FC = ({ children }) => (
  <Button onClick={() => window.open(formUrl)}>{children}</Button>
);

export default SignUpButton;
