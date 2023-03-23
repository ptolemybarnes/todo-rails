describe('template spec', () => {
  const dataTestId = id => `[data-testid="${id}"]`

  it('creates a todo and marks it as done', () => {
    const home = 'http://localhost:3000'
    cy.visit(home)

    cy.get(dataTestId('new-todo-input')).type('Bake birthday cake{enter}')
    cy.get(dataTestId('todos')).contains('Bake birthday cake')

    // ensure new todo is still there after refresh
    cy.visit(home)
    cy.get(dataTestId('todos')).contains('Bake birthday cake')
  })
})
