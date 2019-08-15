import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addNew = todo => {
    dispatch({type: 'ADD_TODO', payload: 'test'})
  };

  return (
    <div className="App">
      <TodoForm addtodo={addNew}/>
      <TodoList
        items={state.todos}
      />
      <button onClick={addNew}>Add New</button>
    </div>
  );
}

export default App;
