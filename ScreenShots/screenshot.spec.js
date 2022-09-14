///<reference types="cypress"/>
beforeEach(()=>{
    cy.visit('https://www.amazon.com/')
})
describe('screenshot',function(){
    it('validating the functionality of screenshot',function(){
    
        cy.screenshot('flipkart')
        cy.get('[alt="Headsets"]').screenshot('flipkart1')
        //cy.screenshot('flipkart1','')
    })
    it.only('Clipped',()=>{

        cy.screenshot('flipkart2',{clip:{x:10,y:20,height:200,width:150}})
        cy.screenshot('Flipkart3',{capture:'fullPage'})
        cy.screenshot('flipkart4',{capture:'runner'})
        cy.screenshot('flipkart5',{capture:'viewport'})
    })
})