import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  address1: yup.string().required('Address Line 1 is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  zip: yup.string().required('Zip Code is required')
});

const Step2 = ({ data, nextStep, prevStep, handleFormData }) => {
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
      <h1 >
      Step 2
    </h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Address Line 1</label>
        <input {...register('address1')} />
        <p>{errors.address1?.message}</p>
      </div>
      <div>
        <label>Address Line 2</label>
        <input {...register('address2')} />
      </div>
      <div>
        <label>City</label>
        <input {...register('city')} />
        <p>{errors.city?.message}</p>
      </div>
      <div>
        <label>State</label>
        <input {...register('state')} />
        <p>{errors.state?.message}</p>
      </div>
      <div>
        <label>Zip Code</label>
        <input {...register('zip')} />
        <p>{errors.zip?.message}</p>
      </div>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
    </div>
  );
};

export default Step2;
