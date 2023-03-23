import React from 'react';
import TodoBoard from './TodoBoard';

const todos = [
  {
    description: 'feed cat',
    isDone: true,
  },
  {
    description: 'bury treasure',
    isDone: false,
  }
]

const App = () => {
  return (
    <TodoBoard todos={todos} updateTodo={() => {}} />
  )
}

export default App;
