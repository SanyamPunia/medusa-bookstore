import { medusaClient } from '@lib/config';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Login from '@modules/account/login';

interface RegisterCredentials {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const Register = () => {
  const [isRegisterVisible, setIsRegisterVisible] = useState<boolean>(true);
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentials>();

  const onSubmit = handleSubmit(async (credentials) => {
    medusaClient.customers
      .create(credentials)
      .then(() => {
        router.push('/products');
      })
      .catch((err) => console.log(err));

    // await medusaClient.auth.getSession().then(({ customer }) => {
    //   console.log(customer);
    // });
  });

  if (isRegisterVisible) {
    return (
      <div className="w-3/4 mx-auto 2xl:w-1/3 md:w-1/2 mt-10 shadow-sm">
        <div className="border rounded-sm border-gray-300 p-6">
          <h1 className="font-playfair mb-7 text-2xl">Register</h1>
          <form className="font-notosans text-sm flex flex-col gap-5" onSubmit={onSubmit}>
            <input
              className="base-input" // Check globals.css
              {...register('first_name', { required: true })}
              placeholder="First Name"
            />
            <input
              className="base-input"
              {...register('last_name', { required: true })}
              placeholder="Last Name"
            />
            <input
              className="base-input"
              {...register('email', { required: true })}
              placeholder="Email"
            />
            <input
              className="base-input"
              {...register('password', { required: true })}
              placeholder="Password"
            />
            <div className="mx-auto">
              <button
                className="font-playfair text-lg transition hover:border-gray-400 hover:shadow-md px-5 py-0.5 border border-gray-500 w-fit rounded-sm"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
          <h1 className="mt-5 italic text-gray-500">
            Already a member? Login{' '}
            <span
              className="text-red-500 cursor-pointer transition hover:text-gray-500"
              onClick={() => setIsRegisterVisible(false)}
            >
              here
            </span>
          </h1>
        </div>
      </div>
    );
  } else {
    return <Login />;
  }
};

export default Register;
