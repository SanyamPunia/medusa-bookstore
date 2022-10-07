import styles from '../styles/Home.module.css';
import Medusa from '@medusajs/medusa-js';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState();

  const medusa = new Medusa({
    baseUrl: 'http://localhost:9000',
    maxRetries: 3,
  });

  useEffect(() => {
    async function getProducts() {
      await medusa.products.retrieve('prod_01GES0ADJBRNDVHCXMKPSCXYME').then(({ product }) => {
        setProducts(product.id);
      });
    }

    getProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <div>hello</div>
    </div>
  );
}
