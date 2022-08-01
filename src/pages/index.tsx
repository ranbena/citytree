import React from 'react';
import { PageProps } from 'gatsby';

import Tours from 'src/components/Home/Tours';
import Stay from 'src/components/Home/Stay';
import InfoCenter from 'src/components/Home/InfoCenter';
import Vision from 'src/components/Home/Vision';
import Contact from 'src/components/Contact';
import Sponsorship from 'src/components/Sponsorship';
import Layout from '../components/Layout';
import TopSection from '../components/Home/TopSection';
import Workshops from '../components/Home/Workshops';
import People from '../components/Home/People';

import '../scss/index.scss';

const Home: React.FC<PageProps> = () => (
  <Layout>
    <TopSection />
    <Tours />
    <Workshops />
    <Stay />
    <InfoCenter />
    <Vision />
    <People />
    <Contact />
    <Sponsorship />
  </Layout>
);

export default Home;
