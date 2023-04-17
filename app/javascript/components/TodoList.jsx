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

const TodoEntry = ({ description, isDone, toggleDoneState, deleteTodo }) => (
  <label>
    <input type="checkbox" checked={isDone} onChange={toggleDoneState} className="form-check-input"/>
    <span className='ms-3'>{ wrapInStrikeThroughIf(description, isDone) }</span>
    <input type='button' value='X' data-testid='todo-delete' onClick={deleteTodo} />
  </label>
)

const TodoList = ({ todos, toggleDoneState, deleteTodo }) => {
  return (
    <ul className="list-group" data-testid="todos">
      {
        Object.values(todos).map(({ description, isDone, uuid }) => {
          return (
            <li className="list-group-item" key={uuid}>
              <TodoEntry
                description={description}
                isDone={isDone}
                toggleDoneState={() => toggleDoneState(uuid)}
                deleteTodo={() => deleteTodo(uuid)}
              />
            </li>
          )
        })
      }
    </ul>
  )
}

export default TodoList
