import React, { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { medusaClient } from '@lib/config';
import Layout from '@modules/layout/templates';
import { NextPageWithLayout } from 'types/global';

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

  return (
    <div>
      <div>hello</div>
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
