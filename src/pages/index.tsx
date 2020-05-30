import React from 'react';
import { PageProps } from 'gatsby';

import '../scss/index.scss';
import {
  Header,
  Footer,
  TopSection,
  MoreSection,
  DonateSection,
  // Shop,
  OurStory,
  OurVision,
} from '../components';

const Home: React.FC<PageProps> = () => (
  <>
    <Header />
    <TopSection />
    <MoreSection />
    <DonateSection />
    {/* <Shop /> */}
    <OurStory />
    <OurVision />
    <Footer />
  </>
);

export default Home;
