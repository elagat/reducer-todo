import React, { useReducer, useState } from 'react';

const TodoForm = props => {

  const [input, setInput] = useState({
    item: '',
    completed: false,
    id: null
  });

  const handleInput = event => {
    setInput({
      ...input,
      item: event.target.value
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
        <button>Add todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
