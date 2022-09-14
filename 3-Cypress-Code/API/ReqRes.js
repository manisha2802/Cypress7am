///<reference types="cypress"/>

describe("Verify Api", function () {

    it("Verify GET API", function () {

        cy.request({

            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.equal(200)
        })
    })

    it("Verify POST API", function () {

        cy.request({

            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.equal(201)
        })
    })

    it("Verify PUT API", function () {

        cy.request({

            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: {
                "name": "morpheus",
                "job": "zion resident"
            }

        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.equal(200)
        })
    })

    it("Verify DELETE API", function () {

        cy.request({

            method: "DELETE",
            url: "https://reqres.in/api/users/3",

        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.equal(204)
        })
    })
})
