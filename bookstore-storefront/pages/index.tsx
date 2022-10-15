import React, { ReactElement, useEffect } from 'react';
import Layout from '@modules/layout/templates';
import { NextPageWithLayout } from 'types/global';
import Hero from '@modules/components/Hero';
import { useAccount } from '@lib/context/account-context';
import { useRouter } from 'next/router';

const Home: NextPageWithLayout = () => {
  const { customer, retrievingCustomer } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (customer) {
      router.push('/store');
    }
  }, [customer]);

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
