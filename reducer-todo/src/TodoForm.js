import React, { useReducer, useState } from 'react';

const TodoForm = props => {

  const [input, setInput] = useState({
    item: 'Learn about reducers',
    completed: false,
    id: Date.now()
  });

  const handleInput = event => {
    setInput({
      ...input,
      item: event.targe.value
    });
  };

  return (
    <div>
      <form>
        <input
          value={input.item}
          onChange={handleInput}
          type='text'
        />
      </form>
    </div>
  );
};

export default TodoForm;
