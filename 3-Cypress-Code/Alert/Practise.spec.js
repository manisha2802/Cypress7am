///<reference types="cypress"/>


describe('Verify the alert Box functionality',function(){


    it("Handling Normal Alerts",function(){

        Cypress.on('uncaught:exception',function(err,runnable){
            return false
        })
        cy.visit("https://demo.automationtesting.in/Alerts.html")
        cy.on('window:alert',function(str){
            // cy.log(str)
            expect(str).to.eq('I am an alert box!')
        })

    })

})