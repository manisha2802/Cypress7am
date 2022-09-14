///<reference types="cypress"/>

describe('verify the functionality of checkboxes', function () {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

      it('Verify iframe functionality with jQuery',function(){

        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('mce_0_ifr').contents().find('body').as()
      })

})
