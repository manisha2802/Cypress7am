///<reference types="cypress"/>
describe("validate functionality", function(){
    it('post,put,delete',function(){
        cy.request({
            method:"POST",
            url:"https://gorest.co.in/public/v2/users",
            headers:{
                Authorization:`Bearer d1955e1c8dc7a94d927aeaa29232fb92ec20316a938b826ae6b68ac934b2522b`
            },
            body:{"name":"Tenali Ramakrishna", "gender":"male", "email":`tenali.rama1krishna${(Math.random())*6}@ce.com`, "status":"active"}
        }).then(function(res){
            expect(res.status).to.eql(201)
            cy.log(res)
            return res.body.id
        
        })
    })
})