import React, { FC } from 'react';
import { Button } from './styles';

const formUrl = 'https://forms.gle/MSp62MWuE6ZEzPhG6';

const SignUpButton: FC<{ children: React.ReactNode }> = ({ children }) => (
  <Button onClick={() => window.open(formUrl)}>{children}</Button>
);

export default SignUpButton;
