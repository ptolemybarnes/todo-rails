describe('create and view a todo', () => {
  const dataTestId = id => `[data-testid="${id}"]`

  it('creates a todo, marks it as done, and then deletes it', () => {
    const home = 'http://localhost:3000'
    cy.visit(home)

    cy.get(dataTestId('new-todo-input')).type('Bake birthday cake{enter}')
    cy.get(dataTestId('todos')).contains('Bake birthday cake')

    // ensure new todo is still there after refresh
    cy.visit(home)
    cy.get(dataTestId('todos')).contains('Bake birthday cake')

    // remove the todo
    const todos = cy.get(dataTestId('todo-delete'))
    todos.first().click()
  })
})
