import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface PropType {
  handle: string;
  thumbnail: string;
  title: string;
}

const Product = (props: PropType) => {
  return (
    <div className="shadow-sm border border-gray-300 rounded transition hover:border-gray-200">
      <Zoom>
        <div className="">
          <Image
            width={1000}
            height={1000}
            placeholder="blur"
            blurDataURL={props.thumbnail}
            className="select-none object-cover w-full h-full rounded-b-md"
            src={props.thumbnail}
          />
        </div>
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
