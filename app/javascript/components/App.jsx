import React, { useState, useEffect } from 'react';
import TodoBoard from './TodoBoard';

const toggleDoneState = (todo) => {
  return { ...todo, isDone: !todo.isDone }
}

const App = () => {
  const [todos, setTodosState] = useState({})

  useEffect(() => {
    fetch('/todos')
      .then(response => response.json())
      .then(todos => setTodosState(todos))
  }, []);

  const updateTodo = (uuid) => {
    const todo = todos[uuid];
    const newTodo = toggleDoneState(todo);
    setTodosState({ ...todos, [uuid]: newTodo })
  }

  return (
    <TodoBoard todos={todos} updateTodo={updateTodo} />
  )
}

export default App;
