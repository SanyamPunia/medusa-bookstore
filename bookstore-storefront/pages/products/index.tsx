import { medusaClient } from '@lib/config';
import ProductCard from '@modules/components/ProductCard';
import Layout from '@modules/layout/templates';
import { ReactElement, useEffect, useState } from 'react';

const Products = () => {
  const getSession = () => {
    medusaClient.auth.getSession().then(({ customer }) => {
      console.log(customer);
    });
  };

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
    <div className="container mx-auto">
      <ProductCard products={products} />
    </div>
  );
};

Products.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Products;
