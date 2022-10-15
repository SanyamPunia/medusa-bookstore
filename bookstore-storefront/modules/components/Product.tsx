import Image from 'next/image';
import { useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface PropType {
  handle: string;
  thumbnail: string;
  title: string;
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join('');
}

const Product = (props: PropType) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className="shadow-sm border border-gray-300 rounded transition hover:border-gray-200">
      <Zoom>
        <Image
          src={props.thumbnail}
          width={1000}
          height={1000}
          className={cn(
            'group-hover:opacity-75 duration-700 ease-in-out select-none object-cover w-full h-full rounded-b-md',
            isLoading ? 'grayscale blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100',
          )}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </Zoom>
      <div className="py-4 px-3 font-notosans space-y-3">
        <p>{props.title}</p>
        <hr />
        <p className="bg-gray-100 w-fit rounded-lg px-1 text-gray-400 transition hover:bg-gray-200 cursor-default">
          <span>#</span> {props.handle}
        </p>
      </div>
    </div>
  );
};

export default Product;
