///<reference types="cypress"/>

describe('Login with cypress json file',()=>{
    it("TC-01 Login with cypress json file",function(){
        cy.visit("/")
        cy.get('#username').type(Cypress.env('UserName'))
        cy.get('#password').type(Cypress.env('password'))
        cy.get('#submit').click()
        cy.get('.post-title').should('contain',"Logged")
    })
})