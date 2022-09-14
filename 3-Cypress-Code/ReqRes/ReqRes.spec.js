///<reference types="cypress"/>

describe("validate the GET,POST, PUT and DELETE APIs", function () {
    it.skip('verify GET API', function () {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then(function (response) {
            cy.log(response.body.data[1])
            expect(response.body).to.have.keys(["data", "page", "per_page", "support", "total", "total_pages"])
            expect(response.body.data[1].first_name).to.eql("Lindsay")
            expect(response.body.data[1]).to.have.keys(["avatar", "email", "id", "first_name", "last_name"])
            expect(response.status).to.eq(200)
            response.body.data.forEach(element => {
                cy.log(element)
                expect(element).to.have.keys(["avatar", "email", "id", "first_name", "last_name"])

            });

        })
    })
    it("verify the POST request", function () {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body:
            {
                "name": "Manisha",
                "job": "leader"
            }

        }).then(function (response) {
            //cy.log(response)
            expect(response.status).to.eq(201)
            expect(response.isOkStatusCode).to.eq(true)
            //cy.log(response.body.id)
            return response.body.id
        }).then(function (id) {
            cy.request({
                mathod: "PUT",
                url: `https://reqres.in/api/users/${id}`,
                body: {
                    "name": "Rani",
                    "job": "zion resident"
                },
                failOnStatusCode: false

            }).then(function (res) {
                cy.log(res)
               // expect(res.status).to.eq(200)
                //return res.

            })
        })
    })
})