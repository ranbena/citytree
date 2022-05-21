import React from 'react';
import { PageProps } from 'gatsby';

import Tours from 'src/components/Home/Tours';
import Layout from '../components/Layout';
import TopSection from '../components/Home/TopSection';

import '../scss/index.scss';

const Home: React.FC<PageProps> = () => (
  <Layout>
    <TopSection />
    <Tours />
  </Layout>
);

export default Home;
