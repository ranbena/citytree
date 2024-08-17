import React from 'react';
import { PageProps } from 'gatsby';

import Tours from 'src/components/Home/Tours';
import InfoCenter from 'src/components/Home/InfoCenter';
import Vision from 'src/components/Home/Vision';
import Contact from 'src/components/Contact';
import Sponsorship from 'src/components/Sponsorship';
import SubscribeTab from 'src/components/Contact/SubscribeTab';
import Layout from '../components/Layout';
import TopSection from '../components/Home/TopSection';
import Workshops from '../components/Home/Workshops';
import People from '../components/Home/People';

import '../scss/index.scss';

const Home: React.FC<PageProps> = () => (
  <Layout>
    <SubscribeTab>
      <TopSection />
      <People />
      {/* <Tours />
      <Workshops /> */}
      <InfoCenter />
      <Vision />
    </SubscribeTab>
    <Contact />
    <Sponsorship />
  </Layout>
);

export default Home;
