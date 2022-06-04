import React from 'react';
import { PageProps } from 'gatsby';

import Tours from 'src/components/Home/Tours';
import Stay from 'src/components/Home/Stay';
import Layout from '../components/Layout';
import TopSection from '../components/Home/TopSection';
import Workshops from '../components/Home/Workshops';

import '../scss/index.scss';

const Home: React.FC<PageProps> = () => (
  <Layout>
    <TopSection />
    <Tours />
    <Workshops />
    <Stay />
  </Layout>
);

export default Home;
