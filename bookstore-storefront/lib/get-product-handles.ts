import { medusaClient } from './config';

export const getProductHandles = async () => {
  const products = await medusaClient.products.list().then(({ products }) => products);
  const handles: string[] = [];

  for (const product of products) {
    if (product.handle) {
      handles.push(product.handle);
    }
  }

  return handles;
};
