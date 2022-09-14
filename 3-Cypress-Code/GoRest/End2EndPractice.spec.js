///<reference types="cypress"/>
let token="Bearer d1955e1c8dc7a94d927aeaa29232fb92ec20316a938b826ae6b68ac934b2522b"
describe('verify the functionality of GoRest API', function () {
    let payload = {
        "name": "Tenali Ramakrishna",
        "gender": "male",
        "email": `tenali.rama1krishna@${Math.random() * 2}ce.com`,
        "status": "active"
    }

    it("verify POST API", function () {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: token
            },
            body: payload
        }).then(function (res) {
            //cy.log(res)
            expect(res.status).to.eq(201)
            return res.body.id
        
        }).then(function(id){
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                headers: {
                    Authorization:token
                },
                body: {
                    "name": "Manisha kamble",
                    "email": `allasani1.peddana@${Math.random()*3}ce.com`,
                    "status": "active"
                }
    
            }).then(function(res){
                //cy.log(res)
                expect(res.status).to.eq(200)
                return res.body.id
            }).then(function(id){
                cy.request({
                    method:"DELETE",
                    url:`https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        Authorization: token
                    }
                }).then(function(res){
                    cy.log(res)
                    expect(res.body).to.eq("")
                })
            })

        })
    })
})