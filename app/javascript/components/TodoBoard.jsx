import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const TodoEntry = ({ description, isDone, updateTodo }) => (
  <label>
    { description } <input type="checkbox" checked={isDone} onChange={updateTodo}/>
  </label>
)

const TodoBoard = ({ todos, updateTodo }) => {
  return (
    <div className='container'>
      <form>
        <label>
          New todo:
          <input type="text" name="new-todo" />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <ul>
        {
          todos.map(({ description, isDone, id }) => {
            return (
              <li key={id}>
                <TodoEntry
                  description={description}
                  isDone={isDone}
                  updateTodo={() => updateTodo(id)}
                />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default TodoBoard
