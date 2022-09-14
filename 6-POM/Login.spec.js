///<reference types="cypress"/>
describe("",function(){
    it('Login with valid credentials',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.title().should('eq','OrangeHRM')

    })

    it('Login with Invalid credentials',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should('contain','Invalid')

    })
})