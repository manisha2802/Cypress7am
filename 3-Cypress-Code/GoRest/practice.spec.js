///<reference types="cypress"/>
let token="Bearer d1955e1c8dc7a94d927aeaa29232fb92ec20316a938b826ae6b68ac934b2522b"
describe('verify the functionality of GoRest API', function () {
    let payload = {
        "name": "Tenali Ramakrishna",
        "gender": "male",
        "email": `tenali.rama1krishna@${Math.random() * 2}ce.com`,
        "status": "active"
    }

    it('verify GET API', function () {

        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: token
            }
        }).then(function (res) {
            expect(res.body.length).to.eq(10)
            expect(res.status).to.eql(200)

            expect(res.requestHeaders).to.have.keys(['Authorization', "Connection", "accept", "accept-encoding", "user-agent"])
            expect(res.body[0].id).to.not.eq("null")
        })
    })
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
        })
    })

    it("Verify the PUT Request", function () {
        cy.request({
            method: "PUT",
            url: "https://gorest.co.in/public/v2/users/17",
            headers: {
                Authorization:token
            },
            body: {
                "name": "Manisha kamble",
                "email": `allasani1.peddana@${Math.random()*3}ce.com`,
                "status": "active"
            }

        }).then(function(response){
            //cy.log(response)
            expect(response.status).to.eq(200)
        })
    })

    it('verify the functionality of DELETE request',function(){
        cy.request({
            method:"DELETE",
            url:"https://gorest.co.in/public/v2/users/17",
            headers: {
                Authorization: token
            }
        }).then(function(res){
            cy.log(res)
        })
    })

})