import React from 'react';
import { useState } from 'react';

const wrapInStrikeThroughIf = (description, isDone) => {
  if (isDone) {
    return (
      <del data-testid="todo-strikethrough">{ description }</del>
    )
  } else {
    return description
  }
}

const TodoEntry = ({ description, isDone, updateTodo }) => (
  <label>
   { wrapInStrikeThroughIf(description, isDone) }<input type="checkbox" checked={isDone} onChange={updateTodo} className="form-check-input"/>
  </label>
)

const TodoList = ({ todos, updateTodo }) => {
  return (
    <ul className="list-group" data-testid="todos">
      {
        Object.values(todos).map(({ description, isDone, uuid }) => {
          return (
            <li className="list-group-item" key={uuid}>
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

export default TodoList
