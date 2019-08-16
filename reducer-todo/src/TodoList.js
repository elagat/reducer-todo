import React from 'react';
import Todo from './Todo';

const TodoList = props => {

  return (
    <div>
      <h1>Todo List</h1>
      {props.items.map(item => (
        <Todo todo={item} toggle={props.toggle} delete={props.delete} />
      ))}
      <button onClick={props.clear}>Clear Completed</button>
    </div>
  );
};

export default TodoList;
