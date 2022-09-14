///<reference types="cypress"/>

beforeEach(function () {
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')

})

describe('Verify the Functionality of WebTable', function () {

    Cypress.on('uncaught:exception', function (err, runnable) {
        return false
    })

    it('Validate the functionality of WebTable', function () {

        // cy.get('#t01').find('tbody').and('tr')

        // cy.get("td:nth-child(2)").each(($e1, index, $list) => {
        // })
        let sum = 0
        cy.get('#t01 > tbody').find('tr').each(($el, index, list) => {

            //cy.log($el.text())

            if (index != 0) {
                // let text=$el.text()
                // cy.log(text)
                let text = ($el.children().last()).text()
                sum = sum + Number(text)

            }

        }).then(function () {
            cy.log(sum)
        })
    })

    it('Verify the functionality of Table', function () {
        let sum = 0
        cy.get('#t02>tbody>tr').each(function ($el, index) {
            if (index != 0) {
                // cy.log($el.text())
                //cy.log(($el.find('td').first()).text())
                // cy.log(($el.find('td').eq(1).text()))
                let age = $el.find('td').eq(2).text()
                sum = sum + Number(age)
                //return sum
            }

            // cy.log(sum)
        }).then(function () {
            // cy.log(sum)
            expect(sum).to.eq(163)
        })

    })



})

