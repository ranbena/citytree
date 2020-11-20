import React from 'react';
import { PageProps } from 'gatsby';
import { TopSection, MoreSection, DonateSection, OurStory, OurVision, Layout } from '../components';
import '../scss/index.scss';

const Home: React.FC<PageProps> = () => (
  <Layout>
    <TopSection />
    <MoreSection />
    <DonateSection />
    <OurStory />
    <OurVision />
  </Layout>
);

export default Home;
