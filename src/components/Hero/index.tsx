import React, { FC, PropsWithChildren } from 'react';
import { Wrapper, Image } from './styles';

interface IProps {
  image?: string;
  bgColor?: string;
  boxColor?: string;
  position?: 'right' | 'left' | 'center';
  anchor?: string;
  className?: string;
}

const Hero: FC<PropsWithChildren<IProps>> = ({
  children,
  image,
  bgColor,
  boxColor,
  position = 'center',
  anchor = '',
  className,
}) => (
  <Wrapper boxColor={boxColor} id={anchor} className={className} bgColor={bgColor}>
    {image && <Image src={image} loading="lazy" width="100%" height="100%" $position={position} />}
    {children}
  </Wrapper>
);

export default Hero;
