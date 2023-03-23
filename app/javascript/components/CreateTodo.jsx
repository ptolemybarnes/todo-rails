import React, { useState } from 'react';

const isBlank = string => string.trim() === "";

const CreateTodo = ({ createTodo }) => {
  const [inputFieldState, setInputFieldState] = useState("")

  const onSubmit = (event) => {
    event.preventDefault()
    createTodo({ description: inputFieldState })
    setInputFieldState("")
  }

  return (
    <form>
      <div className="mb-3">
        <label className="form-label">
          New todo:
          <input
            data-testid="new-todo-input"
            type="text"
            className="form-control"
            name="new-todo"
            onChange={(event) => setInputFieldState(event.target.value) }
            value={inputFieldState} />
        </label>
      </div>
      <div className="mb-3">
        <input className="btn btn-primary" data-testid="new-todo-submit" type="submit" value="Submit" onClick={onSubmit} disabled={isBlank(inputFieldState)} />
      </div>
    </form>
  )
}

export default CreateTodo;
