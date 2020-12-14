import React, { FC } from 'react';
import { Button } from './styles';

// eslint-disable-next-line operator-linebreak
const enrollFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSffMP-84MCH9ylf-4ag8MBAZ-K6OATNK7CeUrrKG1t3S2uXMw/viewform?vc=0&c=0&w=1&flr=0&gxids=7628';

const SignUpButton: FC = ({ children }) => (
  <Button onClick={() => window.open(enrollFormUrl)}>{children}</Button>
);

export default SignUpButton;
