describe('Fundamentals test', () => {
  it('Contains correct header text', () => {
    cy.visit('/fundamentals')
   // cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)
   cy.get('[data-test="fundamentals-header"]').should('contain.text','Testing Fundamentals')
  })

  it('Accordion works correctly', () => {
    cy.visit('/fundamentals')
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.wait(2000)
    cy.get('[data-test="accordion-item-1"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
  })
})