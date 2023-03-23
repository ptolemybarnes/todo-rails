import React, { useState } from 'react';
import TodoBoard from './TodoBoard';
import short from 'short-uuid';

const todosFixture = [
  {
    description: 'feed cat',
    isDone: true,
    id: short.generate(),
  },
  {
    description: 'bury treasure',
    isDone: false,
    id: short.generate(),
  }
]

const createTodosState = input => {
  const foo = input.map(todo => {
    return {
      [todo.id]: todo
    }
  })
  const todos = Object.assign(...foo)
  return todos;
}

const toggleDoneState = (todo) => {
  return { ...todo, isDone: !todo.isDone }
}

const state = createTodosState(todosFixture)

const App = () => {
  const [todos, setTodosState] = useState(state)
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
