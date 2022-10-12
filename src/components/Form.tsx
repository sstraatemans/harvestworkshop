import React, { useState } from 'react';
import { Button, Input, FormComp } from './styled';

interface iProps {
  onClick: (value: string) => void;
}

const Form: React.FC<iProps> = ({ onClick }) => {
  const [value, setValue] = useState<string>();

  const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick(value);
    setValue('');
  };
  return (
    <FormComp>
      <Input type='text' onChange={handleChange} value={value} />
      <Button onClick={handleOnClick}>Add to list</Button>
    </FormComp>
  );
};

export default Form;
