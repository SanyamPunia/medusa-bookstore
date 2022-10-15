import '../styles/globals.css';
import { MEDUSA_BACKEND_URL, queryClient } from '@lib/config';
import { AppPropsWithLayout } from '../types/global';
import { CartProvider, MedusaProvider } from 'medusa-react';
import { AccountProvider } from '@lib/context/account-context';

function MyApp({ Component, pageProps }: AppPropsWithLayout<{}>) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <MedusaProvider
      baseUrl={MEDUSA_BACKEND_URL}
      queryClientProviderProps={{
        client: queryClient,
      }}
    >
      <CartProvider>
        <AccountProvider>{getLayout(<Component {...pageProps} />)}</AccountProvider>
      </CartProvider>
    </MedusaProvider>
  );
}

export default MyApp;
