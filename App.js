// src/App.js
import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      todos.forEach((todo, index) => {
        const reminderTime = new Date(todo.dueTime).getTime() - 3 * 60 * 60 * 1000; // 3 hours before due time
        if (now.getTime() >= reminderTime && now.getTime() < new Date(todo.dueTime).getTime()) {
          alert(`Reminder: The task "${todo.text}" is due in 3 hours!`);
        }
      });
    };
    const interval = setInterval(checkReminders, 60 * 1000); // Check every minute
    return () => clearInterval(interval);
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const deleteCompleted = (index) => {
    const newCompleted = [...completedTodos];
    newCompleted.splice(index, 1);
    setCompletedTodos(newCompleted);
  };

  const markAsDone = (index) => {
    const newTodos = [...todos];
    const [doneTodo] = newTodos.splice(index, 1);
    setTodos(newTodos);
    setCompletedTodos([...completedTodos, doneTodo]);
  };

  const editTodo = (index, updatedTodo) => {
    const newTodos = [...todos];
    newTodos[index] = updatedTodo;
    setTodos(newTodos);
  };

  const deleteAllPending = () => {
    setTodos([]);
  };

  const deleteAllCompleted = () => {
    setCompletedTodos([]);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <p><i>Add the todo task and the due date and time of the respective task here</i></p>
      <TodoForm addTodo={addTodo} />
      
      <h2>Pending</h2>
      
      <TodoList todos={todos} deleteTodo={deleteTodo} markAsDone={markAsDone} editTodo={editTodo} />
      <button onClick={deleteAllPending} className="delete-all-button">Delete All Pending</button>

      <h2>Completed</h2>
      
      <TodoList todos={completedTodos} deleteTodo={deleteCompleted} editTodo={editTodo} completed />
      <button onClick={deleteAllCompleted} className="delete-all-button">Delete All Completed</button>
    </div>
  );
}

export default App;
