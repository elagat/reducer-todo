import React, { useReducer } from 'react';

const [input, setinput] = useState({
  item: 'Learn about reducers',
  completed: false,
  id: Date.now()
});

const handleInput = event => {
  setInput({
    ...input,
    item: event.targe.value
  });
};

const TodoForm = props => {

  return (
    <div>
      <form>
        <input
          value={input.item}
          onChange={handleInput}
          type='text'
        />
      </form>
    </div>
  );
};

export default TodoForm;
