/// <reference types="cypress" />
describe('verify the action  Drag and Drop in cypress',function(){

    it('verfify the scroll into view',function(){
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#iframe').scrollIntoView().invoke('removeAttr','target').click()
        cy.url().should('contain','IFrame')
    })

    
    it.skip('verfify the scroll into view',function(){
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click()
        cy.url().should('contain','Actions')
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable').find('p').find('b').should('have.text','Dropped!')

    })

      
    it.skip('verfify the scroll into view',function(){
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click()
        cy.url().should('contain','Actions')
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable').find('p').find('b').should('have.text','Dropped!')
    })

    it.skip('verfify the scroll into view',function(){

        let dataTransfer = new DataTransfer()
        cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
        cy.get('#menu-fried-chicken').trigger('dragstart',{dataTransfer})
        cy.get('#plate-items').trigger('drop',{dataTransfer})
        cy.get('#menu-fried-chicken').trigger('dragend',{dataTransfer},{force:true})
    
        
    })




})