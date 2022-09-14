///<reference types="cypress"/>
// Cypress.on('uncaught:exception',(err,Runnable)=>{
//     return false
// })
describe("Verify the login functionality",function(){

    it('Verify with different login ID',function(){

        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type("locked_out_user")
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
       // cy.title().should('eq','Swag Labs')

    })
})



