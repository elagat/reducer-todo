import React, { useState } from 'react';

const TodoForm = props => {

  const [input, setInput] = useState({
    item: '',
    completed: false,
    id: null
  });

  const handleInput = event => {
    setInput({
      ...input,
      item: event.target.value,
      id: Date.now()
    });
  };

  const addTodo = event => {
    event.preventDefault();
    props.addTodo(input);
    setInput({
      item: '',
      completed: false,
      id: null
    });
  };

  return (
    <div>
      <form onSubmit={addTodo}>
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
