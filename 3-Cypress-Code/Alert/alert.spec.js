///<reference types="cypress"/>

beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
})
describe("Verify the functionality of alert box", function () {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it(' TC_01 verify the functionality of simple Alert', function () {

        cy.on('window:alert', function (str) {
            expect(str).to.eql('I am a JS Alert')

        })
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert', function () {
            return true
        })
        cy.get('#result').should('contain', "successfully")
    })

    it('TC_02 verify the functionality of confirm Alert withy ok', function () {
        
        cy.on('window:confirm',function(str){
            expect(str).to.eql("I am a JS Confirm")
        })
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', function () {
            return true
        })
        cy.get('#result').should('contain', "You clicked: Ok")
    })

    it('TC_03 Verify the functionality of confirm alert with cancel',()=>{
        cy.on('window:confirm',(str)=>{
            expect(str).to.eq("I am a JS Confirm")
        })

        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm',()=>{
            return false
        })
        cy.get('#result').should('contain','You clicked: Cancel')
    })

    it('TC_04 Verify the functionality of prompt alert',()=>{
        
        cy.window().then(function(win){
            cy.stub(win,'prompt').returns('I am new to Cypress')
            cy.contains('Click for JS Prompt').click()
        })
        
        cy.get('#result').should('contain','I am new to Cypress')
    })

    it('TC_05 verify the functionality of confirm with OK',()=>{

        cy.window().then(function(win){

            cy.stub(win, 'confirm').returns(true)
            cy.contains('Click for JS Confirm').click()
        })
        cy.get('#result').should('contain', "You clicked: Ok")
    })

    it('TC_06 verify the functionality of confirm with cancel',()=>{

        cy.window().then(function(win){

            cy.stub(win, 'confirm').returns(false)
            cy.contains('Click for JS Confirm').click()
        })
        cy.get('#result').should('contain', "You clicked: Cancel")
    })
})