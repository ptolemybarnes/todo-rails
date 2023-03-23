describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')

    cy.get('input[type="checkbox"]').first().click()
    cy.get('input[type="checkbox"]').should('be.checked')
  })
})
