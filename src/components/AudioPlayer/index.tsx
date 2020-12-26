import React, { FC } from 'react';
import { FormattedDate } from 'gatsby-plugin-intl';
import AudioCard from 'audiocard';

import { Wrapper, Title, Date, AudioWrapper } from './styles';

interface IProps {
  title: string;
  desc?: string;
  artSrc: string;
  date: Date;
  audioSrc: string;
}

const Component: FC<IProps> = ({ title, date, artSrc, audioSrc }) => (
  <Wrapper>
    <figure>
      <figcaption>
        <Title>{title}</Title>
        <Date>
          <FormattedDate value={date} year="numeric" month="long" day="2-digit" />
        </Date>
      </figcaption>
      <AudioWrapper>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <AudioCard
          color="#3d6127"
          progressBarCompleteBackground="#809336"
          art={artSrc}
          source={audioSrc}
          skipBackSeconds={10}
          skipForwardSeconds={30}
        />
      </AudioWrapper>
    </figure>
  </Wrapper>
);

export default Component;
