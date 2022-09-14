///<reference types="cypress"/>
describe('verify the functionality of Go Rest API', function () {
    let token = "Bearer 4682c7888368922069a06b7001ebf5a7e7d3c8ab7269669606c6491b6c0e87d9"
    it('vaidate the List of User API', function () {

        cy.request({
            mathod: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: token
            }

        }).then(function (res) {
            cy.log(res)
            expect(res.body.length).to.eql(10)
            expect(res.isOkStatusCode).to.eql(true)
            expect(res.requestHeaders).have.keys(["Authorization", "Connection", "accept", "accept-encoding", "user-agent"])
            expect(res.duration).to.within(10, 200)
            expect(res.status).to.eql(200)
            res.body.forEach(element => {
                expect(element).to.have.keys(["id", "email", "name", "gender", "status"])

            });
        })
    })
    it('validate the POST user API', function () {
        let payload = {
            "name": "Tenali Ramakrishna",
            "gender": "male",
            "email": `tenali${Math.random() * 2}.rama1krishna@15ce.com`,
            "status": "active"
        }
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: payload,
            headers: {
                Authorization: token
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eql(201)
            expect(res.body.id).not.equal(null)
            expect(res.body.name).to.eql(payload.name)
            expect(res.body.email).to.eqls(payload.email)
            expect(res.body.gender).to.eq(payload.gender)
        })

    })

    it('validate the PUT user API', function () {

        let payload = {
            "name": "Manisha kamble",
            "email": `allasani${Math.random() * 3}.peddana@15ce.com`,
            "status": "active",
            "gender": "female"
        }
        cy.request({

            method: "PUT",
            url: "https://gorest.co.in/public/v2/users/7",
            headers: {
                Authorization: token
            },
            body: payload

        }).then((res) => {
            cy.log(res.body)
            expect(res.status).to.eql(200)
            expect(res.duration).within(100, 500)
            expect(res.body.name).to.eql(payload.name)
            expect(res.body.email).to.eqls(payload.email)
            expect(res.body.gender).to.eq(payload.gender)
            expect(res.body).have.keys(["id","name","email","status","gender"])
        })


    })

    it('validate the Delete user API', function () {

        cy.request({
            method:"DELETE",
            url:"https://gorest.co.in/public/v2/users/7",
            headers:{
                Authorization:token
            }

        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eql(204)
        })
    })
})