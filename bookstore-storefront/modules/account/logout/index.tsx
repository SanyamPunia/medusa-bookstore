import { useAccount } from '@lib/context/account-context';

const Logout = () => {
  const { customer, handleLogout } = useAccount();

  return (
    <div className='mt-5'>
      <div>
        <p>Signed In as: {customer?.first_name}</p>
        <p>Email: {customer?.email} </p>
      </div>
      <button onClick={() => handleLogout()}>Log Out</button>
    </div>
  );
};

export default Logout;
