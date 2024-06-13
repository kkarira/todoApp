// src/TodoItem.js
import React from 'react';

function TodoItem({ todo, index, deleteTodo, markAsDone, completed }) {
  return (
    <li className="todo-item">
      <span>{todo.text} (Due: {new Date(todo.dueTime).toLocaleString()})</span>
      <div className="icons">
        {!completed && (
          <span onClick={() => markAsDone(index)} className="icon done-icon">
            &#10003; {/* Unicode for check mark */}
          </span>
        )}
        <span onClick={() => deleteTodo(index)} className="icon delete-icon">
          &#128465; {/* Unicode for delete icon */}
        </span>
      </div>
    </li>
  );
}

export default TodoItem;
