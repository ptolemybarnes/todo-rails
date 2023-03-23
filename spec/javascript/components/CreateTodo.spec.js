import React, { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import CreateTodo from '../../../app/javascript/components/CreateTodo'

const Page = {
  submitButton: "new-todo-submit",
  input: "new-todo-input"
}

describe('CreateTodo', () => {
  test('creates a todo when submitted', async () => {
    const user = userEvent.setup()
    const createTodo = jest.fn()

    render(
      <CreateTodo createTodo={createTodo} />
    );

    const input = screen.getByTestId(Page.input);
    await act(async () => {
      await user.type(input, "Go for a walk");
      screen.getByTestId(Page.submitButton).click();
    });

    expect(createTodo).toHaveBeenCalledWith({ description: "Go for a walk" });
  });

  test('cannot create a blank todo', async () => {
    const user = userEvent.setup()
    const createTodo = jest.fn()

    render(
      <CreateTodo createTodo={createTodo} />
    );

    const input = screen.getByTestId(Page.input);
    await act(async () => {
      await user.type(input, "   ");
      screen.getByTestId(Page.submitButton).click();
    });

    expect(createTodo).not.toHaveBeenCalled();
  });
});
