import React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/Layout';
import TopSection from '../components/Home/TopSection';
import MoreSection from '../components/Home/MoreSection';
import DonateSection from '../components/Home/DonateSection';
import OurStory from '../components/Home/OurStory';
import OurVision from '../components/Home/OurVision';

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
