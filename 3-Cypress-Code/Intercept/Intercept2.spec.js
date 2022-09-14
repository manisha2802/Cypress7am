describe('verify the functionality of intercept with stubbed data', function(){

    it('verify getApI with stub data',()=>{

        cy.intercept({
            url:"https://jsonplaceholder.cypress.io/comments/1",
            method:"GET"
        },{
            statusCode: 200,
            body: {
                "postId": 1,
                "language": "hindi",
                "id": 2,
                "name": "Manisha Kamble",
                "email": "abc@gmail.com",
                "body": "Hello"
            }
        }).as('getComment')
        cy.visit("https://example.cypress.io/commands/network-requests")
        cy.contains("Get Comment").click()
        cy.wait('@getComment')
        
    })
})