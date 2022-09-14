describe('verify the functionality of dynamic dropdowm',function(){
    it('Dynamic dropdown', function(){
        cy.visit("https://www.google.com/")
        cy.get('[name="q"]').type('cypre')
        cy.get('[role="presentation"]>div>div>div>span')
    })
})