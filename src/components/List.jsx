import React from 'react';
import { Ul, Li } from './styled';

const List = ({ values, onDelete }) => {
  return (
    <Ul>
      {values.map((value) => (
        <Li key={value}>
          {value}
          <button type='button' onClick={() => onDelete(value)}>
            delete
          </button>
        </Li>
      ))}
    </Ul>
  );
};

export default List;
