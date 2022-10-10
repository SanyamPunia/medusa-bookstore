import React, { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { medusaClient } from '@lib/config';
import Layout from '@modules/layout/templates';
import { NextPageWithLayout } from 'types/global';
import Register from '@modules/account/register';

const Home: NextPageWithLayout = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { products, count, offset } = await medusaClient.products.list({
        limit: 12,
      });
      setProducts(products);
    };

    fetchProducts();
  }, []);

  console.log('products');
  console.log(products);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = medusaClient.customers.retrieve().then(({ customer }) => {
        console.log(customer);
      })
    };

    fetchCurrentUser()
  });

  return (
    <div>
      <div>hello</div>
      <Register />
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
