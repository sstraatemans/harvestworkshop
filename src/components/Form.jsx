import React, { useState } from 'react';
import { Input, FormComp } from './styled';

const Form = ({ onClick }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    onClick(value);
    setValue('');
  };
  return (
    <FormComp>
      <Input type='text' onChange={handleChange} value={value} />
      <button onClick={handleOnClick}>Add to list</button>
    </FormComp>
  );
};

export default Form;
