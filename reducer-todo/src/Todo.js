import React from 'react';

const Todo = props => {

  return (
    <div>
      <h3>Todo 1</h3>
      <div>
        <button onClick={() => props.delete(props.todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
