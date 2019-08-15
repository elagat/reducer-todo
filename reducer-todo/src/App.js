import React, { useReducer } from 'react';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
