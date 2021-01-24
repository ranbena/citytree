import React, { FC } from 'react';
import styled from 'styled-components';
import { PageProps } from 'gatsby';
import Layout from 'src/components/Layout';

const Text = styled.h1`
  text-align: center;
  margin: 100px 0;
`;

const NotFound: FC<PageProps> = () => (
  <Layout>
    <Text>העמוד לא נמצא</Text>
  </Layout>
);

export default NotFound;
