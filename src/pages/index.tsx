import React from 'react';
import { PageProps } from 'gatsby';

import '../scss/index.scss';
import { Header, Footer, TopSection, MoreSection } from '../components';

const Home: React.FC<PageProps> = () => (
  <>
    <Header />
    <TopSection />
    <MoreSection />
    <Footer />
  </>
);

export default Home;
