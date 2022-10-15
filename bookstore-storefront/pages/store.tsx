import { medusaClient } from '@lib/config';
import ProductCard from '@modules/components/ProductCard';
import Layout from '@modules/layout/templates';
import { ReactElement, useEffect, useState } from 'react';
import { useAccount } from '@lib/context/account-context';
import { NextPageWithLayout, PrefetchedPageProps } from 'types/global';

const Store: NextPageWithLayout<PrefetchedPageProps> = () => {
  const { checkSession } = useAccount();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

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
    <div className="container mx-auto">
      <ProductCard products={products} />
    </div>
  );
};

Store.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Store;
