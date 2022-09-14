///<reference types="Cypress"/>

beforeEach(function () {
    cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
})

describe('verify the functionality of checkbox', function () {
    it('validate the checkBox functionality by selecting single ele', function () {

        cy.get('input[value="option-1"]').check().should('be.checked')
        cy.get('input[value="option-1"]').uncheck().should('not.be.checked')

    })

    it('validate the checkBox functionality by using Uncheck method', function () {

        cy.get('input[value="option-1"]').uncheck().should('not.be.checked')
        cy.get('input[value="option-1"]').check().should('be.checked')

    })

    it('validate the checkBox functionality by selecting all the checkboxes', function () {

        cy.get('input[type="checkbox"]').each(function (el) {
            cy.wrap(el).check().should('be.checked')

        })

    })

    it('validate the checkBox functionality by unchecking all the checkboxes', function () {

        cy.get('input[type="checkbox"]').each(function (el) {
            cy.wrap(el).uncheck().should('not.be.checked')
        })

    })

    // it('validate the checkBox functionality by selecting all element', function () {

    //     cy.get('.section-title').find('')(function (el) {
    //         cy.wrap(el).uncheck().should('not.be.checked')
    //     })

    // })
})