///<reference types="cypress"/>

describe('verify the functionality of checkboxes', function () {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it('verify the checkbox', function () {

        cy.visit("https://demo.automationtesting.in/Register.html")
        cy.get('input[type="checkbox"]').check()
    })
})