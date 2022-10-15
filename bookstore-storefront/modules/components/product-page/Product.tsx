import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import {
  ExclamationCircleIcon,
  PlusCircleIcon,
  MinusCircleIcon,
} from '@heroicons/react/24/outline';

const Product = (props) => {
  console.log('Props from product-page');
  console.log(props);
  let [countProducts, setCountProducts] = useState(0);

  function incrementCount() {
    if (countProducts > -1) {
      setCountProducts(++countProducts);
    }
  }

  function decreaseCount() {
    if (countProducts > 0) {
      setCountProducts(--countProducts);
    }
  }

  function createCart() {}

  const product = props.product;

  return (
    <div className="flex lg:flex-row gap-20 w-3/4 mx-auto flex-col">
      <div className="w-2/3 max-w-lg sm:text-center mx-auto sm:w-3/4">
        <Carousel showArrows={true} className="w-full h-full">
          <Zoom>
            <img className="rounded-sm" src={product.images[0].url} />
          </Zoom>
          <Zoom>
            <img src={product.images[1]?.url} />
          </Zoom>
        </Carousel>
      </div>
      <div className="space-y-10">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-3xl font-playfair">{product.title}</h2>
          <p className="text-sm italic text-gray-400 bg-gray-200 w-fit px-1 rounded font-notosans">
            {product.handle}
          </p>
          <p className="text-md font-notosans">{product.description}</p>
        </div>

        <hr />

        <div className="font-notosans space-y-1 bg-gray-50 rounded-md p-2">
          <h1 className="text-xl text-green-600 flex gap-x-1 items-center">
            <span>
              <ExclamationCircleIcon className="w-6" />
            </span>
            In Stock
          </h1>
          <p className="text-sm text-gray-400">
            Only 100 left in stock. Order now before it runs out of stock.
          </p>
        </div>

        <hr />

        <div className="space-y-5">
          <h1 className="text-xl font-playfair">Add To Cart</h1>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center text-blue-300 text-lg">
              <span
                onClick={() => decreaseCount()}
                className="bg-gray-100 p-1 rounded-md transition hover:bg-gray-200 hover:active:bg-gray-300 cursor-pointer"
              >
                <MinusCircleIcon className="w-7" />
              </span>
              <p className="font-notosans text-gray-500">{countProducts}</p>
              <span
                onClick={() => incrementCount()}
                className="bg-gray-100 p-1 rounded-md transition hover:bg-gray-200 hover:active:bg-gray-300 cursor-pointer"
              >
                <PlusCircleIcon className="w-7" />
              </span>
            </div>
            <div className="bg-gray-100 px-5 text-md py-1 rounded h-full transition hover:bg-gray-200 hover:active:bg-gray-300 cursor-pointer">
              <button onClick={() => createCart()}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
