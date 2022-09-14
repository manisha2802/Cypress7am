describe('Verify the functionality of Mouse Hover',()=>{

    it('Mouse Hover Test',()=>{
       // cy.visit("https://www.flipkart.com/")
        //cy.get('.go_DOp').first().invoke('show')
        //cy.contains('My Profile').click();
        cy.visit("https://codenboxautomationlab.com/practice/")
        cy.get('.sf-with-ul').first().invoke('show')
        cy.get('.sub-menu').children().contains('Cypress Automation').click();
        
    })
})