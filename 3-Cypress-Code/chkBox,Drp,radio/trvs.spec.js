///<reference types="cypress"/>
describe("Verify the functionality of traverse methods",function(){

    it('Verify the functionality of children()',function(){
        cy.visit('https://example.cypress.io/commands/traversal')
        cy.get('.traversal-breadcrumb >li').children('.active').prev().should('have.text','Library')
    })
})