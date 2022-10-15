import { useAccount } from '@lib/context/account-context';
import Logout from '@modules/account/logout';

const Nav = () => {
  const { customer } = useAccount();

  return (
    <header className="py-20 container mx-auto">
      <nav className="font-playfair sticky top-0 text-center">
        <h1 className="text-3xl">Medusa Bookstore</h1>
        {customer ? <Logout /> : <h1>Not Signed In</h1>}
      </nav>
    </header>
  );
};

export default Nav;
