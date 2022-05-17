import React, { useState } from 'react';

const Todolist = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!todo) {
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo('');
  };
  return (
    <div>
      <h1>My To Dos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={todo}
          placeholder="write your to do..."
          onChange={onChange}
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
