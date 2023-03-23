import React, { useState } from 'react';

const CreateTodo = ({ createTodo }) => {
  const [inputFieldState, setInputFieldState] = useState("")

  const onSubmit = (event) => {
    event.preventDefault()
    createTodo({ description: inputFieldState })
    setInputFieldState("")
  }

  return (
    <form>
      <label>
        New todo:
        <input
          data-testid="new-todo-input"
          type="text"
          name="new-todo"
          onChange={(event) => setInputFieldState(event.target.value) }
          value={inputFieldState} />
      </label>
      <input data-testid="new-todo-submit" type="submit" value="Submit" onClick={onSubmit} />
    </form>
  )
}

export default CreateTodo;
