import { medusaClient } from '@lib/config';
import { useState } from 'react';
import Router, { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

interface RegisterCredentials {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentials>();

  const onSubmit = handleSubmit(async (credentials) => {
    medusaClient.customers
      .create(credentials)
      .then(() => {
        Router.push('/');
      })
      .catch((err) => console.log(err));

    await medusaClient.customers?.retrieve().then(({ customer }) => {
      console.log(customer);
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <input {...register('first_name', { required: true })} placeholder="first name" />
      <input {...register('last_name', { required: true })} placeholder="last name" />
      <input {...register('email', { required: true })} placeholder="email" />
      <input {...register('password', { required: true })} placeholder="password" />
      <input type="submit" />
    </form>
  );
};

export default Register;
