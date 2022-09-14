/// <reference types="cypress"/>

describe("verify the functionality of amazon Website",()=>{

    it("verify the functionality of Today's deals",()=>{

        cy.visit("https://www.amazon.com/")
        cy.get("#nav-xshop").eq(2).click()
    })
})