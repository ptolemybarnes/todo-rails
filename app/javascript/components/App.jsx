import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';
import { v4 as uuidv4 } from 'uuid';

const PATHS = {
  todos_path: '/todos'
}

const toggleDoneState = (todo) => {
  return { ...todo, isDone: !todo.isDone }
}

const persistNewTodo = (newTodo, authenticationToken) => {
  fetch(PATHS.todos_path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-CSRF-Token': authenticationToken
    },
    body: JSON.stringify(newTodo)
  })
}

const App = ({ authenticationToken }) => {
  const [todos, setTodosState] = useState({})

  useEffect(() => {
    fetch(PATHS.todos_path)
      .then(response => response.json())
      .then(todos => setTodosState(todos))
  }, []);

  const toggleDoneState = (uuid) => {
    const todo = todos[uuid];
    const newTodo = toggleDoneState(todo);
    setTodosState({ ...todos, [uuid]: newTodo })
  }

  const createTodo = ({ description }) => {
    const newTodo = { description, uuid: uuidv4(), isDone: false };
    setTodosState({ ...todos, [newTodo.uuid]: newTodo });
    persistNewTodo(newTodo, authenticationToken);
  }

  return (
    <div className="container">
      <h1>Todo</h1>
      <CreateTodo createTodo={createTodo} />
      <TodoList todos={todos} toggleDoneState={toggleDoneState} />
    </div>
  )
}

export default App;
