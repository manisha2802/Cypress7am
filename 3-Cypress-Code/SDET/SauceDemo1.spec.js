///<reference types="cypress"/>

describe('Validate login functionalitywith valid credentials', function () {
    it('Valid user name', function () {

        cy.login('https://www.saucedemo.com/','standard_user','secret_sauce')
        cy.title().should('eq', 'Swag Labs')
        cy.login('https://www.saucedemo.com/','problem_user','secret_sauce')
        cy.title().should('eq', 'Swag Labs')
        cy.login('https://www.saucedemo.com/','locked_out_user','secret_sauce')
        cy.title().should('eq', 'Swag Labs')
        cy.login('https://www.saucedemo.com/','performance_glitch_user','secret_sauce')
        cy.title().should('eq', 'Swag Labs')
    

    })
})