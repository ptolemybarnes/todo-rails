import React, { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import CreateTodo from '../../../app/javascript/components/CreateTodo'

test('creates a todo when submitted', async () => {
  const user = userEvent.setup()
  const createTodo = jest.fn()

  render(
    <CreateTodo createTodo={createTodo} />
  );

  const input = screen.getByTestId("new-todo-input");
  await act(async () => {
    await user.type(input, "Go for a walk");
    screen.getByTestId("new-todo-submit").click();
  });

  expect(createTodo).toHaveBeenCalledWith({ description: "Go for a walk" });
});
