import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <TodoForm />
      <TodoList
        items={state.todos}
      />
    </div>
  );
}

export default App;
