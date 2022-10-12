import React from 'react';
import { Button, Ul, Li } from './styled';

interface iProps {
  values: string[];
  onDelete: (value: string) => void;
}

const List: React.FC<iProps> = ({ values, onDelete }) => {
  return (
    <Ul>
      {values.map((value) => (
        <Li key={value}>
          {value}
          <Button type='button' onClick={() => onDelete(value)}>
            delete
          </Button>
        </Li>
      ))}
    </Ul>
  );
};

export default List;
