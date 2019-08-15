import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addNew = todo => {
    dispatch({type: 'ADD_TODO', payload: 'todo'});
  };

  const toggle = id => {
    dispatch({type: 'TOGGLE_COMPLETE', payload: id});
  };

  const clear = () => {
    dispatch({type:'CLEAR_COMPLETE'});
  };

  const deleteTodo = id => {
    dispatch({type: 'DELETE_TODO', payload: id});
  };

  return (
    <div className="App">
      <TodoForm addTodo={addNew}/>
      <TodoList
        items={state.todos}
        toggle={toggle}
        clear={clear}
        delete={deleteTodo}
      />
    </div>
  );
}

export default App;
