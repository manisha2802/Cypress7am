///<reference types="Cypress"/>

beforeEach(function () {
     cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
     cy.get('[name="first_name"]').type("Manisha")
     cy.get('[name="last_name"]').type("Kamble")
})

describe('Verify Login Functionality', function () {
    it('Validate the Login functionality with valid credentials', function () {

        cy.get('[name="email"]').type("abc@gmail.com")
        cy.get('[name="message"]').type("Hello World")
        cy.get('[type="submit"]').click();
        cy.get('h1').should('contain', 'Message')

    })

    it('Validate the Login functionality with invalid credentials', function () {

        cy.get('[name="email"]').type("abc123")
        cy.get('[name="message"]').type("Hello World")
        cy.get('[type="submit"]').click();
        cy.get('body').should('contain', 'Error')

    })

    it('Validate the functionality of reset button functionality', function () {

        cy.get('[name="email"]').type("abc123")
        cy.get('[name="message"]').type("Hello World")
        cy.get('[type="reset"]').click();
        cy.get('input').should('have.text', "")

    })
})