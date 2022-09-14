describe('Verify Elements through traverse methods ', function () {
    //1
    it('eq method', function () {

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.scrollTo('bottom')
        cy.get('.traversal-drinks-list li').eq(1).should('have.text','Tea')
    })

    //2
    it('first method', function () {

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.scrollTo('bottom')
        cy.get('.traversal-drinks-list').find('li').first().should('have.text','Coffee')
    })

    //3
    it('last method', function () {

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.scrollTo('bottom')
        cy.get('.traversal-food-list').find('li').first().should('have.text','Fruits')
        cy.get('.traversal-food-list').find('li').last().should('have.text','Lentils')
    })

    //4
    it('children method', function () {

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.scrollTo('bottom')
        cy.get('.menu').children().should('have.length',3)
       
    })

    //5
    it('next method', function () {

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.scrollTo('bottom')
        cy.get('#fruits').next().should('have.text','Apple')
       
    })

    //6
    it('Previous method', function () {

        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.scrollTo('bottom')
        cy.get('#veggie').prev().should('have.text','Figs')
       
    })

    //6
    it('To get all sibling DOM elements of elements, use the .siblings() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.scrollTo('bottom')
        cy.get('#veggie').siblings().should('have.length',10)

    })

    //7
    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.scrollTo('bottom')
        cy.get('#veggie').nextAll().should('have.length',4)

    })

    //7
    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.scrollTo('bottom')
        cy.get('#veggie').prevAll().should('have.length',6)

    })

    //8
    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.scrollTo('bottom')
        cy.get('#veggie').prevUntil('#fruits').should('have.length',5)

    })

    //9
    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.scrollTo('bottom')
        cy.get('#fruits').nextUntil('#veggie').should('have.length',5)

    })

    //10
    it('To get descendant DOM elements of the selector, use the .find() command', function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.scrollTo('bottom')
        cy.get('.traversal-job-list').find('.sales').should('have.text','Sales')
    })

    //11
    it('To get the closest ancestor DOM element, use the .closest() command.', function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.scrollTo('bottom')
        cy.get('.sales').closest('ul').should('have.class','menu')
        
    })
    //12
    it.only('To get DOM elements that match a specific selector, use the .filter() command.',function(){
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.scrollTo('bottom')
        cy.get('.traversal-food-list').children().filter('#veggie').should('have.text','Vegetables')
    })

})