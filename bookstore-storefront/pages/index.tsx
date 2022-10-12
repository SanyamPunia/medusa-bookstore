import React, { ReactElement } from 'react';
import Layout from '@modules/layout/templates';
import { NextPageWithLayout } from 'types/global';
import Hero from '@modules/components/Hero';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
