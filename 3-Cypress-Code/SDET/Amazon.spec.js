///<reference types="cypress"/>

describe('',function(){

Cypress.on('uncaught:exception',function(err,runnable){
    return false
})

    it('',function(){
        cy.visit('https://www.amazon.com/')
        cy.get('#twotabsearchtextbox').then(function(el){
            cy.wrap(el).type("Samsung")
            cy.get('.s-heavy').contains('watch').click()
        })
        
       
    })
})