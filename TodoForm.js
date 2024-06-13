// src/TodoForm.js
import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  const [dueTime, setDueTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !dueTime) return;
    addTodo({
      text: value,
      dueTime: new Date(dueTime)
    });
    setValue('');
    setDueTime('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new todo"
      />
      <input
        type="datetime-local"
        value={dueTime}
        onChange={(e) => setDueTime(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
