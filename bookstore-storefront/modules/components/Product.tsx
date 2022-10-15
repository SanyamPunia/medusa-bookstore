import { cn } from '@lib/class-names';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface PropType {
  handle: string;
  thumbnail: string;
  title: string;
}

const Product = (props: PropType) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className="shadow-sm border border-gray-300 rounded transition hover:shadow-md hover:active:shadow-sm hover:border-gray-200">
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

      <Link href={`/products/${props.handle.replaceAll(' ', '-').toLowerCase()}`}>
        <div className="py-4 px-3 font-notosans space-y-3 cursor-pointer">
          <p>{props.title}</p>
          <hr />
          <p className="bg-gray-100 w-fit rounded-lg px-1 text-gray-400 transition hover:bg-gray-200 cursor-default">
            <span>#</span> {props.handle}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
