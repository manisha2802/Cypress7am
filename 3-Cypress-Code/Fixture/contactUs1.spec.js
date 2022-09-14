///<reference types="cypress"/>
import obj from "../../../fixtures/users1.json"

describe("verify the functionality of fixture", function () {

    it("same test case with different sets of data", function () {
        cy.fixture('users1').then(function (users) {
            cy.log(users)
            users.forEach(element => {

                cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
                cy.get('[name="first_name"]').type(element.Fname)
                cy.get('[name="last_name"]').type(element.lName)
                cy.get('[name="email"]').type(element.email)
                cy.get('[name="message"]').type(element.message)
                cy.get('[type="submit"]').click();
                cy.get('h1').should('contain', 'Message')
            });

        })

    })

    it(`same test case with different sets of data`, function () {
        obj.forEach(element => {

            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(element.Fname)
            cy.get('[name="last_name"]').type(element.lName)
            cy.get('[name="email"]').type(element.email)
            cy.get('[name="message"]').type(element.message)
            cy.get('[type="submit"]').click();
            cy.get('h1').should('contain', 'Message')
        });

    })

    obj.forEach(function(element,index ) {
        it.only(`same test case with different sets of data ${index}`, function () {

            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(element.Fname)
            cy.get('[name="last_name"]').type(element.lName)
            cy.get('[name="email"]').type(element.email)
            cy.get('[name="message"]').type(element.message)
            cy.get('[type="submit"]').click();
            cy.get('h1').should('contain', 'Message')
        });

    })

})