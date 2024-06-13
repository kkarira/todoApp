// src/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, markAsDone, completed }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          deleteTodo={deleteTodo}
          markAsDone={markAsDone}
          completed={completed}
        />
      ))}
    </ul>
  );
}

export default TodoList;
