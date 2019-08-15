import React from 'react';
import Todo from './Todo';

const TodoList = props => {

  return (
    <div>
      <h1>Todo List</h1>
      {props.items.map(item => (
        <Todo todo={item} />
      ))};
    </div>
  );
};

export default TodoList;
