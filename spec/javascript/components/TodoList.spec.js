import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import TodoList from '../../../app/javascript/components/TodoList'

test('updates a todo when checked', async () => {
  const user = userEvent.setup()
  const toggleDoneStatus = jest.fn()
  const todo = {
    uuid: 'wDwDq6',
    description: 'feed cat',
    isDone: false,
  }
  const todos = [
    todo,
  ]

  render(
    <TodoList toggleDoneStatus={toggleDoneStatus} todos={todos}  />
  );

  await user.click(screen.getByText(todo.description))

  expect(toggleDoneStatus).toHaveBeenCalledWith(todo.uuid)
});

test('a todo marked as done is struck through', async () => {
  const toggleDoneStatus = jest.fn()
  const todo = {
    uuid: 'wDwDq6',
    description: 'feed cat',
    isDone: true,
  }
  const todos = [
    todo,
  ]

  render(
    <TodoList toggleDoneStatus={() => {}} todos={todos}  />
  );

  screen.getByTestId('todo-strikethrough')
})

test('a todo not marked as done is not struck through', async () => {
  const toggleDoneStatus = jest.fn()
  const todo = {
    uuid: 'wDwDq6',
    description: 'feed cat',
    isDone: false,
  }
  const todos = [
    todo,
  ]

  render(
    <TodoList toggleDoneStatus={() => {}} todos={todos}  />
  );

  const struckThroughTodo = screen.queryByTestId('todo-strikethrough')
  expect(struckThroughTodo).toBeNull()
})