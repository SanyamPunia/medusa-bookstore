import { medusaClient } from '@lib/config';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface SignInCredentials {
  email: string;
  password: string;
}

const Login = () => {
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
        router.push('/');
      })
      .catch((err) => console.log(err));

    await medusaClient.customers?.retrieve().then(({ customer }) => {
      console.log(customer);
    });
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input {...register('email', { required: true })} />
        <input {...register('password', { required: true })} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
