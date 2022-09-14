///<reference types="cypress"/>

describe('Datepicker demo', function () {

    Cypress.on('uncaught:exception', function (err, runnable) {
        return false
    })
    it('Verify the functionality of datePicker', function () {

        //cy.scrollTo('center')
        // cy.get('#datepicker1').scrollIntoView()
        // //cy.get('.imgdp').click({force: true})
        //let me  cy.get('.ui-datepicker-prev ui-corner-all')
        // cy.contains('Next')
        let date = new Date()
        cy.log(date)
        let day = date.getDay()//toLocaleDateString('default',{day:'2-digit'})
        let month = date.toLocaleString('default', { month: "long" })
        let year = date.getFullYear()
        cy.log(day)
        cy.log(month)
        cy.log(year)
        date.setDate(day + 265)
        let day1 = date.getDay()//toLocaleDateString('default', { day: '2-digit' })
        let month1 = date.toLocaleString('default', { month: "long" })
        let year1 = date.getFullYear()
        cy.log(date)
        cy.log(day1)
        cy.log(month1)
        cy.log(year1)
        cy.visit('https://demo.automationtesting.in/Datepicker.html')
        cy.get('#datepicker1').scrollIntoView().click()
        function getDateAndMonth() {
            cy.get('.ui-datepicker-title').then(function (el) {
                //cy.log(el.text())
                if (!el.text().includes(year1)) {
                    cy.contains('Next').click()
                    getDateAndMonth()
                }
                
            })
            cy.get('.ui-datepicker-title').then(function (el) {
                //cy.log(el.text())
                if (!el.text().includes(month1)) {
                    cy.contains('Next').click()
                    getDateAndMonth()

                }

            })
    
        }
        getDateAndMonth()
        

    })
})