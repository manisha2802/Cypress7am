///<reference types="cypress"/>

describe('',()=>{
    
    Cypress.on('uncaught:exception',(err,Runnable)=>{
        return false
    })
    it.only('Verify the functionality of Table',function(){

        cy.visit("https://www.techlistic.com/p/demo-selenium-practice.html")
        cy.get('#customers>tbody>tr').each(($el,index)=>{
            if(index!=0)
            {
                //let data=($el.find('td').eq(i)).text()
                cy.log($el.text())
            }
        })

    })
})