///<reference types="cypress"/>

describe("Validate the Functionality of Radio button",function(){
    it("Verify the functionality of radio button by selecting 1 option",function(){
        cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.get("input[value='green']").click().should('be.checked')
    })

    it("Verify the functionality of radio button by selecting every element 1 by 1 option",function(){
        cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.get("#radio-buttons").find('input').each(function(el){
            cy.wrap(el).click().should('be.checked')
        })
    })

})