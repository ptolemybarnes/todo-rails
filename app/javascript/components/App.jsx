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

  const updateTodo = (id) => {
    const todo = todos[id];
    const newTodo = toggleDoneState(todo);
    setTodosState({ ...todos, [id]: newTodo })
  }

  return (
    <TodoBoard todos={todos} updateTodo={updateTodo} />
  )
}

export default App;
