describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')

    cy.get('input[type="checkbox"]').first().check()
    cy.get('input[type="checkbox"]').should('be.checked')
  })
})
