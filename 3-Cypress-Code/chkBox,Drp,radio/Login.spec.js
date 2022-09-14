///<reference types= "cypress"/>

describe('Verify the Login Functionality',function(){
    it('Validate Login Functionality with valid credentials', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click();
        cy.get('h1').should('be.visible').and('have.text','Dashboard')
    })

    it('Validate login Functionality with invalid credentials', function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.scrollTo(0,300)
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin1234')
        cy.get('#btnLogin').click();
        cy.get('#spanMessage').should('be.visible').and('have.text','Invalid credentials')
    })

})