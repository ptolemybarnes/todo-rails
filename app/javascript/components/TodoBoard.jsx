import React from 'react';
import { useState } from 'react';

const TodoEntry = ({ description, isDone, updateTodo }) => (
  <label>
    { description } <input type="checkbox" checked={isDone} onChange={updateTodo}/>
  </label>
)

const TodoBoard = ({ todos, updateTodo }) => {
  return (
    <ul data-cy="todos">
      {
        Object.values(todos).map(({ description, isDone, uuid }) => {
          return (
            <li key={uuid}>
              <TodoEntry
                description={description}
                isDone={isDone}
                updateTodo={() => updateTodo(uuid)}
              />
            </li>
          )
        })
      }
    </ul>
  )
}

export default TodoBoard
