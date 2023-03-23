import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import TodoBoard from '../../../app/javascript/components/TodoBoard'

test('updates a todo when checked', async () => {
  const user = userEvent.setup()
  const updateTodo = jest.fn()
  const todo = {
    id: 'wDwDq6',
    description: 'feed cat',
    isDone: false,
  }
  const todos = [
    todo,
  ]

  render(
    <TodoBoard updateTodo={updateTodo} todos={todos}  />
  );

  await user.click(screen.getByText(todo.description))


  expect(updateTodo).toHaveBeenCalledWith(todo.id)
});
