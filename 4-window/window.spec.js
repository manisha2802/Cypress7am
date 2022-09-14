///<reference types="cypress"/>

describe('Validate the functionality of Window object', function () {
    it.only('Veify window object', function () {
        cy.visit('https://automationteststore.com/')
        cy.window().then(function (win) {
            cy.log(win.location)
            expect(win.location.protocol).to.eq('https:')
            expect(win.location.href).to.eq('https://automationteststore.com/')
            expect(win.location.port).to.eq("")
            
            win.location.reload();
            cy.log(cy.title())
        })

    })

    it('verify location property of window', function () {
        cy.visit('https://automationteststore.com/')
        cy.get('.nav-pills').children().last().trigger('mouseover')
        //cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=65"]').click()
        // cy.get('.maintext').should('contain', 'Books')
        // cy.window().then(function (win) {
        //     win.history.back()
        //     cy.url().should('eq', 'https://automationteststore.com/')
        //     // win.history.go(-1)

        // })

    })
})