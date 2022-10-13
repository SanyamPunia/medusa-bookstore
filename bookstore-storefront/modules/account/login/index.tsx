import { medusaClient } from '@lib/config';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Register from '@modules/account/register';
import Link from 'next/link';

interface SignInCredentials {
  email: string;
  password: string;
}

const Login = () => {
  const [isViewLogin, setIsViewLogin] = useState<boolean>(true);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInCredentials>();

  const onSubmit = handleSubmit(async (credentials) => {
    medusaClient.auth
      .authenticate(credentials)
      .then(() => {
        if (medusaClient.auth.exists(credentials.email)) {
          router.push('/products');
        } else {
          router.push('/');
        }
      })
      .catch((err) => console.log(err));

    // await medusaClient.auth.getSession().then(({ customer }) => {
    //   console.log(customer);
    // });
  });

  if (isViewLogin) {
    return (
      <div className="w-3/4 mx-auto 2xl:w-1/3 md:w-1/2 mt-10 shadow-sm">
        <div className="border rounded-sm border-gray-300 p-6">
          <h1 className="font-playfair mb-7 text-2xl">Login</h1>
          <form className="font-notosans text-sm  flex flex-col gap-5" onSubmit={onSubmit}>
            <input
              className="base-input" // Check globals.css
              placeholder="Email"
              {...register('email', { required: true })}
            />
            <input
              className="base-input"
              placeholder="Password"
              {...register('password', { required: true })}
              type="password"
            />
            <div className="mx-auto">
              <button
                className="font-playfair text-lg transition hover:border-gray-400 hover:shadow-md px-5 py-0.5 border border-gray-500 w-fit rounded-sm"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
          <h1 className="mt-5 italic text-gray-500">
            Not a member? Register{' '}
            <span
              className="text-red-500 cursor-pointer transition hover:text-gray-500"
              onClick={() => setIsViewLogin(false)}
            >
              here
            </span>
          </h1>
        </div>
      </div>
    );
  } else {
    return <Register />;
  }
};

export default Login;
