import React from 'react';

const wrapInStrikeThroughIf = (description, isDone) => {
  if (isDone) {
    return (
      <del data-testid="todo-strikethrough">{ description }</del>
    )
  } else {
    return description
  }
}

const TodoEntry = ({ description, isDone, toggleDoneStatus }) => (
  <label>
    <input type="checkbox" checked={isDone} onChange={toggleDoneStatus} className="form-check-input"/>
    <span className='ms-3'>{ wrapInStrikeThroughIf(description, isDone) }</span>
  </label>
)

const TodoList = ({ todos, toggleDoneStatus }) => {
  return (
    <ul className="list-group" data-testid="todos">
      {
        Object.values(todos).map(({ description, isDone, uuid }) => {
          return (
            <li className="list-group-item" key={uuid}>
              <TodoEntry
                description={description}
                isDone={isDone}
                toggleDoneStatus={() => toggleDoneStatus(uuid)}
              />
            </li>
          )
        })
      }
    </ul>
  )
}

export default TodoList