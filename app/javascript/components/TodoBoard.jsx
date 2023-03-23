import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const TodoEntry = ({ description, isDone }) => (
  <label>
    { description } <input type="checkbox" checked={isDone}/>
  </label>
)

TodoBoard.propTypes = {
  isDone: PropTypes.bool
}

const TodoBoard = () => {
  dsadsa

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
        <li>
          <TodoEntry description="Feed cat" isDone={false} />
        </li>
        <li>Bury treasure</li>
        <li>Go for a run</li>
      </ul>
    </div>
  )
}

export default TodoBoard
