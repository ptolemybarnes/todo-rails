import React from 'react';
import TodoBoard from './TodoBoard';

const todos = [
  {
    description: 'feed cat',
    isDone: false,
  },
  {
    description: 'bury treasure',
    isDone: false,
  }
]

const App = () => {
  return (
    <TodoBoard todos={todos} />
  )
}

export default App;
