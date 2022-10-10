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
  });

  return (
    <form onSubmit={onSubmit}>
      <input {...register('first_name')} placeholder="first name" required />
      <input {...register('last_name')} placeholder="last name" required />
      <input {...register('email')} placeholder="email" required />
      <input {...register('password')} placeholder="password" required />
      <input type="submit" />
    </form>
  );
};

export default Register;
