import React, { useState, useEffect } from 'react';
import TodoBoard from './TodoBoard';
import CreateTodo from './CreateTodo';
import { v4 as uuidv4 } from 'uuid';

const PATHS = {
  todos_path: '/todos'
}

const toggleDoneState = (todo) => {
  return { ...todo, isDone: !todo.isDone }
}

const App = () => {
  const [todos, setTodosState] = useState({})

  useEffect(() => {
    fetch(PATHS.todos_path)
      .then(response => response.json())
      .then(todos => setTodosState(todos))
  }, []);

  const updateTodo = (uuid) => {
    const todo = todos[uuid];
    const newTodo = toggleDoneState(todo);
    setTodosState({ ...todos, [uuid]: newTodo })
  }

  const createTodo = ({ description }) => {
    const newTodo = { description, uuid: uuidv4(), isDone: false }
    setTodosState({ ...todos, [newTodo.uuid]: newTodo })
  }

  return (
    <div id="container">
      <CreateTodo createTodo={createTodo} />
      <TodoBoard todos={todos} updateTodo={updateTodo} />
    </div>
  )
}

export default App;
