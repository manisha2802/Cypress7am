///<reference types="cypress"/>

beforeEach(function () {

    cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
})

describe("verify the functionality of Dropdown button", function () {

    it("Validate the functionality of dropdown", function () {

        cy.get('#dropdowm-menu-1').select('c#').should('have.value', 'c#')

    })

    it("Validate the functionality of dropdown", function () {

        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
    })
})