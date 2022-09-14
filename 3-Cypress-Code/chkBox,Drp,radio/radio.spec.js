///<referencen types="cypress"/>
describe("verify the functionality of radio button", function () {

    it('validate the radio button', function () {
        cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
        cy.get('input[type = "radio"]').first().should('be.checked')
    })

    it('validate the radio button', function () {
        cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
        cy.get('input[type = "radio"]').eq(1).click().should('be.checked')
    })

    it('validate all the radio buttons', function () {
        cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
        cy.get('input[type = "radio"]').each(function(el){
            cy.wrap(el).click().should('be.checked')
        })
    })

    it('validate all the checkboxes', function () {
        cy.visit("https://www.ironspider.ca/forms/checkradio.htm")
        cy.get('input[type="checkbox"]').each(function(el){
            cy.wrap(el).check().should('be.checked')
        })
    })
})