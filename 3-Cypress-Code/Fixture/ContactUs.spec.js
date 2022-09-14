///<reference types="cypress"/>
import obj from "../../../fixtures/info.json"
import { info1 } from "../../../fixtures/info1"

let info = {
    Fname: " Manisha",
    lName: "Kamble",
    email: "abc@gmail.com",
    message: "Hello"

}
beforeEach(function () {
    cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
})
describe('Verify the functionality of fixture', function () {

    let data = undefined;
    before(function () {
        cy.fixture('info').then((resp) => {
            cy.log(resp)
            data = resp
        })

    })
    it('Verify the functionality of reading data simple way', function () {

        cy.get('input[name="first_name"]').type("Manisha")
        cy.get('input[name="last_name"]').type("Kamble")
        cy.get('input[name="email"]').type("abc@gmail.com")
        cy.get('textarea[name="message"]').type("message")
        cy.get('input[value="SUBMIT"]').click();
        cy.contains('Thank You').should('have.text', "Thank You for your Message!")
    })

    it('Verify the functionality of reading data from object', function () {

        cy.get('input[name="first_name"]').type(info.Fname)
        cy.get('input[name="last_name"]').type(info.lName)
        cy.get('input[name="email"]').type(info.email)
        cy.get('textarea[name="message"]').type(info.message)
        cy.get('input[value="SUBMIT"]').click();
        cy.contains('Thank You').should('have.text', "Thank You for your Message!")
    })

    it('Verify the functionality of reading data from Fixture folder', function () {

        cy.fixture('info').then(function (res) {

            cy.get('input[name="first_name"]').type(res.Fname)
            cy.get('input[name="last_name"]').type(res.lName)
            cy.get('input[name="email"]').type(res.email)
            cy.get('textarea[name="message"]').type(res.message)
            cy.get('input[value="SUBMIT"]').click();
            cy.contains('Thank You').should('have.text', "Thank You for your Message!")

        })
    })

    it('Verify the functionality of reading data from Fixture folder through Before()', function () {

        cy.get('input[name="first_name"]').type(data.Fname)
        cy.get('input[name="last_name"]').type(data.lName)
        cy.get('input[name="email"]').type(data.email)
        cy.get('textarea[name="message"]').type(data.message)
        cy.get('input[value="SUBMIT"]').click();
        cy.contains('Thank You').should('have.text', "Thank You for your Message!")

    })

    it('Verify the functionality of reading data from Fixture folder through import', function () {

        cy.get('input[name="first_name"]').type(obj.Fname)
        cy.get('input[name="last_name"]').type(obj.lName)
        cy.get('input[name="email"]').type(obj.email)
        cy.get('textarea[name="message"]').type(obj.message)
        cy.get('input[value="SUBMIT"]').click();
        cy.contains('Thank You').should('have.text', "Thank You for your Message!")

    })

    it.only('Verify the functionality of reading data from JS file through import', function () {

        cy.get('input[name="first_name"]').type(info1.name)
        cy.get('input[name="last_name"]').type(info1.lName)
        cy.get('input[name="email"]').type(info1.email)
        cy.get('textarea[name="message"]').type(info1.message)
        cy.get('input[value="SUBMIT"]').click();
        cy.contains('Thank You').should('have.text', "Thank You for your Message!")

    })

})
