import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { PageProps } from 'gatsby';
// import { Helmet } from 'react-helmet';
// import { useIntl } from 'gatsby-plugin-intl';

import Layout from 'src/components/Layout';
// import AudioPlayer from 'src/components/AudioPlayer';

// import audio1 from 'src/assets/podcasts/20-12-2020_Asher-Maimon.mp3';
// import art1 from 'src/assets/podcasts/20-12-2020_Asher-Maimon.jpg';

// import audio2 from 'src/assets/podcasts/21-12-2020_Mor-Gilboa.mp3';
// import art2 from 'src/assets/podcasts/21-12-2020_Mor-Gilboa.jpg';

const Page: FC<PageProps> = () => (
  // const { formatMessage } = useIntl();

  <Layout>
    <Container>
      {/* <AudioPlayer
          title={formatMessage({ id: 'podcasts.21-12-2020_Mor-Gilboa.title' })}
          audioSrc={audio2}
          artSrc={art2}
          date={new Date('21 Dec 2020')}
        />
        <AudioPlayer
          title={formatMessage({ id: 'podcasts.20-12-2020_Asher-Maimon.title' })}
          audioSrc={audio1}
          artSrc={art1}
          date={new Date('20 Dec 2020')}
        /> */}
    </Container>
  </Layout>
);
export default Page;
