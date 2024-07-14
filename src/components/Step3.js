import React from 'react';

const Step3 = ({ data, prevStep, handleSubmit }) => {
  const submitForm = (e) => {
    handleSubmit(e);
  };

  return (
    <div className='step'>
    <h1>
      Step 3
    </h1>
    <div className='info'>
      <h2>Confirmation</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Phone:</strong> {data.phone}</p>
      <p><strong>Address Line 1:</strong> {data.address1}</p>
      <p><strong>Address Line 2:</strong> {data.address2}</p>
      <p><strong>City:</strong> {data.city}</p>
      <p><strong>State:</strong> {data.state}</p>
      <p><strong>Zip Code:</strong> {data.zip}</p>
      <div>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="button" onClick={(e) => submitForm(e)}>Submit</button>
      </div>
    </div>
    </div>
  );
};

export default Step3;
