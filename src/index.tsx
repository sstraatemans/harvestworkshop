import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import List from './components/List';

const App: React.FC = () => {
  const [values, setValues] = useState([
    'Create CSS',
    'Add CSS to an external stylesheet',
    '???',
    'Profit!',
  ]);

  const handleAdd = (value: string): void => {
    setValues((prev) => [...prev, value]);
  };

  const onDelete = (value: string): void => {
    setValues((prev) => {
      const array = [...prev];
      const idx = array.indexOf(value);
      array.splice(idx, 1);
      return array;
    });
  };
  return (
    <>
      <List values={values} onDelete={onDelete} />
      <Form onClick={handleAdd} />
    </>
  );
};

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
