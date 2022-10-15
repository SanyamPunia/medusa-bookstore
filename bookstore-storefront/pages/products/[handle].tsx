import { medusaClient } from '@lib/config';
import Layout from '@modules/layout/templates';
import { ReactElement, useEffect } from 'react';
import { useAccount } from '@lib/context/account-context';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getProductHandles } from '@lib/get-product-handles';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { NextPageWithLayout, PrefetchedPageProps } from 'types/global';
import { useRouter } from 'next/router';
import { IS_BROWSER } from '@lib/constants';
import Product from '@modules/components/product-page/Product';

interface Params extends ParsedUrlQuery {
  handle: string;
}

const fetchProduct = async (handle: string) => {
  return await medusaClient.products.list({ handle }).then(({ products }) => products[0]);
};

const ProductPage: NextPageWithLayout<PrefetchedPageProps> = ({ notFound }) => {
  console.log(notFound);

  const { query, isFallback, replace } = useRouter();
  const { checkSession } = useAccount();
  const handle = typeof query.handle === 'string' ? query.handle : '';

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  const { data, isError, isLoading, isSuccess } = useQuery(
    [`get_product`, handle],
    () => fetchProduct(handle),
    {
      enabled: handle.length > 0,
      keepPreviousData: true,
    },
  );

  if (notFound) {
    if (IS_BROWSER) {
      replace('/404');
    }

    return;
  }

  if (isFallback || isLoading || !data) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    replace('/404');
  }

  if (isSuccess) {
    return (
      <div className="container mx-auto">
        <Product product={data} />
      </div>
    );
  }
};

ProductPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const handles = await getProductHandles();

  return {
    paths: handles.map((handle) => ({ params: { handle } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const handle = context.params?.handle as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([`get_product`, handle], () => fetchProduct(handle));
  const queryData = await queryClient.getQueryData([`get_product`, handle]);

  if (!queryData) {
    return {
      props: {
        notFound: true,
      },
    };
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      notFound: false,
    },
  };
};

export default ProductPage;
