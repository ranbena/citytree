import React, { FC } from 'react';
import { Button } from './styles';

// eslint-disable-next-line operator-linebreak
const enrollFormUrl = 'http://bit.ly/FormMagicLink';

const SignUpButton: FC = ({ children }) => (
  <Button onClick={() => window.open(enrollFormUrl)}>{children}</Button>
);

export default SignUpButton;
