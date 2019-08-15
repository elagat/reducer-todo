import React, { useReducer } from 'react';

const TodoList = props => {

  return (
    <div>
      <h1>Todo List</h1>
      {props.items.map(item => {
        <Todo todo={item} />
      })}
    </div>
  );
};

export default TodoList;
