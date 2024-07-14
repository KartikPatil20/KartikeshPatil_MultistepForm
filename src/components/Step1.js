import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup.string().required('Phone is required')
});

const Step1 = ({ data, nextStep, handleFormData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: data
  });

  const onSubmit = (values) => {
    handleFormData(values);
    nextStep();
  };

  return (
    <div className='step'>
    <h1>
      Step 1
    </h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register('name')} />
        <p>{errors.name?.message}</p>
      </div>
      <div>
        <label>Email</label>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label>Phone</label>
        <input {...register('phone')} />
        <p>{errors.phone?.message}</p>
      </div>
      <button type="submit">Next</button>
    </form>
    </div>
  );
};

export default Step1;
