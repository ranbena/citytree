import React, { FC } from 'react';
import { Button } from './styles';

const enrollFormUrl = 'http://bit.ly/FormMagicLink';

const SignUpButton: FC<{ children: React.ReactNode }> = ({ children }) => (
  <Button onClick={() => window.open(enrollFormUrl)}>{children}</Button>
);

export default SignUpButton;
