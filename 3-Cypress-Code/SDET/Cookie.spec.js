///<reference types="cypress"/>

before(function () {
    cy.visit('https://webdriveruniversity.com/')
})
describe('verify the  title', function () {

    it('Verify the functionality of title', function () {

        cy.document().then((doc) => {
            cy.log(doc.cookie)
            //cy.title().should('eq','WebDriverUniversity.com')
            expect(doc.title).to.eq('WebDriverUniversity.com')
        })
    })

    it.skip('Title', () => {
        cy.title().should('eq', 'WebDriverUniversity.com')
    })

    it('Validate Height and width of Page', function () {

        cy.document().then(function (doc) {

            let a = Cypress.$(doc)
            cy.log(a.width())
            cy.log(a.height())
            cy.viewport(550, 750)
            cy.viewport('iphone-7', 'portrait')
        })
    })

    it('Validate title', function () {

        cy.document().then(doc => {

            cy.log(doc)
            const title = doc.title
            expect(title).to.eq('WebDriverUniversity.com')
        })
    })

    it('Validate Height and width of Page', function () {

        cy.document().then(doc => {

            cy.log(doc)  //doc is a javascript ele
            let obj = Cypress.$(doc)   //converting it into JQuery ele so that we can access JQuery methods
            let h = obj.height()
            let w = obj.width()
            cy.log(`Height =${h} and Width = ${w}`)
        })
    })

    it('Validate viewPort', function () {

        cy.document().then(doc => {
            cy.viewport('ipad-2', 'portrait')  //viewport takes 2 arguments preset and Orientation
            cy.wait(2000)
            cy.viewport('ipad-mini', 'landscape')
            cy.wait(3000)
            cy.viewport(600, 500, 'landscape')
        })
    })

    it.only('Validate Cookie', function () {

        cy.document().then(doc => {

            let c = doc.cookie
            cy.log(c)
            let c1 = doc.cookie = "I am Working on cookie"
            cy.log(c1)
            cy.getCookie('ChannelName','Working on cookie')
            cy.setCookie('channelName','Leanrning Cypress')
            cy.clearCookie('channelName')

        })
    })

})