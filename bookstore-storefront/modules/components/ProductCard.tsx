import Product from '@modules/components/Product';

const ProductCard = (props: any) => {
  const propProducts = props.products;
  console.log(propProducts);

  return (
    <div className="p-5 grid xl:grid-cols-4 gap-20 sm:grid-cols-2 lg:grid-cols-3">
      {propProducts.map((prop) => (
        <Product handle={prop.handle} thumbnail={prop.thumbnail} title={prop.title} />
      ))}
    </div>
  );
};

export default ProductCard;
