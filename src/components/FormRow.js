import React from 'react';

const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className='form-row'>
    <label 
      className='form-label' 
      htmlFor={name}>
        { labelText || name }
    </label>
    <input 
      id={name}
      type={type}
      name={name}
      value={value} 
      onChange={handleChange} 
      className='form-input' 
    />
  </div>
  )
};

export default FormRow;