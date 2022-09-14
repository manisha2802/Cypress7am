///<reference types="cypress"/>
describe('verify the functionality of text boxes',function(){
    it('validate the textbox functionality', function(){
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('input[name="first_name"]').type("My {name} is {Manisha}",{ parseSpecialCharSequences: false })
        cy.get('input[name="last_name"]').type("My [name] is $Manisha")
    })
})