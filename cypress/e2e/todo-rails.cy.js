describe('template spec', () => {
  it('creates a todo and marks it as done', () => {
    cy.visit('http://localhost:3000')

    cy.get('input[type="text"]').type('Bake birthday cake{enter}')
    cy.get('[data-cy="todos"]').contains('Bake birthday cake')
  })
})
