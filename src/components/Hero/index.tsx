import React, { FC, PropsWithChildren } from 'react';
import { Wrapper, Image } from './styles';

interface IProps {
  image?: string;
  boxColor?: string;
  position?: 'right' | 'left' | 'center';
  anchor?: string;
  className?: string;
}

const Hero: FC<PropsWithChildren<IProps>> = ({
  children,
  image,
  boxColor,
  position = 'center',
  anchor = '',
  className,
}) => (
  <Wrapper boxColor={boxColor} id={anchor} className={className}>
    <Image src={image} loading="lazy" width="100%" height="100%" $position={position} />
    {children}
  </Wrapper>
);

export default Hero;
