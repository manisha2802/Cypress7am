///<reference types="cypress"/>

describe('Validate doc functionality', function () {
    it.only('TC=01 Verify the functionality of doc', function () {
        cy.visit('https://kitchen.applitools.com/')
        cy.document().then(function (doc) {
            //cy.log(doc)
            expect(doc.title).to.eq('The Kitchen')
            cy.log(doc.URL)
           cy.log(cy.title())
            
        })

    })

    it.only('TC=02 Verify the height and width of Doc', function () {
        cy.visit('https://kitchen.applitools.com/')
        cy.document().then(function (doc) {
            let ele = Cypress.$(doc)  //now doc is jquery ele, we can use jqury methods
            let height = ele.height()
            //let height=ele.height()
            let width = ele.width()
            cy.log(height, width)

            let el2 = cy.$$(doc)
            cy.log(el2.height())
            cy.log(el2.width())
        })
    })
    it('TC=03 Verify the viewport functionality', function () {

        cy.visit('https://kitchen.applitools.com/')
        cy.viewport(300, 500)
        cy.viewport('iphone-6+', 'portrait')
        cy.viewport('iphone-xr', 'landscape')

    })

    it('TC=03 Verify the cookie', function () {

        cy.visit('https://kitchen.applitools.com/ingredients/cookie')
        cy.getCookies().then(function (cookie) {
            cy.log(cookie)
        })
        cy.setCookie('Name', "Manisha")
        cy.getCookies().then(function (cookie) {
            cy.log(cookie)
            cy.clearCookie("protein", "chicken")
            cy.log(cookie)

        })
        cy.clearCookies().then(function (c) {
            cy.log(c)
            expect(c).to.eq(null)
        })


    })
})