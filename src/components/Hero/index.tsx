import React, { FC, PropsWithChildren } from 'react';
import { Wrapper } from './styles';

interface IProps {
  image?: string;
  boxColor?: string;
  position?: 'right' | 'left' | 'center';
}

const Hero: FC<PropsWithChildren<IProps>> = ({
  children,
  image,
  boxColor,
  position = 'center',
}) => (
  <Wrapper
    style={{ backgroundImage: `url(${image})`, backgroundPositionX: position }}
    boxColor={boxColor}
  >
    {children}
  </Wrapper>
);

export default Hero;
