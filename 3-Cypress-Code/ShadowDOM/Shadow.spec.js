describe('Verify the shadow dom element',function(){

    it('Verify shadowDOM element',function(){

        cy.visit('http://192.168.1.100:5500/cypress/integration/3-Cypress-Code/ShadowDOM/shadow.html')
        cy.contains('Add Shadow DOM').click();
        cy.get('#shadowHost').shadow().find('h2').should('have.text','I belong to Shadow DOM')
    })

    it('Verify shadowDOM element',function(){

        cy.visit('http://192.168.1.100:5500/cypress/integration/3-Cypress-Code/ShadowDOM/shadow.html')
        cy.contains('Add Shadow DOM').click();
        cy.get('#shadowHost').shadow().find('#name').type("Hello")
        .should('have.value','Hello')
    })

    it('validate the shadow dom element', function () {
        cy.visit('http://192.168.1.100:5500/cypress/integration/3-Cypress-Code/ShadowDOM/shadow.html')
        cy.contains('Add Shadow DOM').click()
        //cy.contains('I belong to Shadow DOM')
        cy.get('#shadowHost').then(function (el) {
            let [dom] = el.get()
            expect(dom.shadowRoot.querySelector('h2').textContent).to.eq('I belong to Shadow DOM')
        })
    })

    it.only('validate the shadow dom element', function () {
        cy.visit('http://192.168.1.100:5500/cypress/integration/3-Cypress-Code/ShadowDOM/shadow.html')
        cy.contains('Add Shadow DOM').click()
        cy.get('h2').first().should('have.text','I belong to Shadow DOM')

    })

    it.only('validate the shadow dom element', function () {
        cy.visit('http://192.168.1.100:5500/cypress/integration/3-Cypress-Code/ShadowDOM/shadow.html')
        cy.contains('Add Shadow DOM').click()
        cy.get('h2',{includeShadowDom:true}).first().should('have.text','I belong to Shadow DOM')

    })

})