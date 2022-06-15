import React from 'react';
import { PageProps } from 'gatsby';

import Tours from 'src/components/Home/Tours';
import Stay from 'src/components/Home/Stay';
import InfoCenter from 'src/components/Home/InfoCenter';
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
    <InfoCenter />
  </Layout>
);

export default Home;
