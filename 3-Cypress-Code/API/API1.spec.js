///<reference types="cypress"/>

describe('verify the functionality API', function () {
    it('verify the functinality of GET', function () {
        cy.request({
            url: 'https://reqres.in/api/users?page=2',
            method: 'GET',

        }).then(function ({ status, body, duration, headers }) {

            expect(status).to.eqls(200)
            expect(body).to.have.keys(["data", "page", 'total', "per_page", "support", "total_pages"])
            expect(duration).to.be.within(50, 400)
            expect(headers).to.have.property('date')
            body.data.forEach(element => {
                expect(element).to.have.keys(["id", "first_name", "last_name", "email", "avatar"])
                expect(element.first_name).not.to.eql(null)
                expect(element.last_name).not.to.eql(null)
                expect(element.email).not.to.eql(null)
                expect(element.id).not.to.eql(null)
                expect(element.avatar).not.to.eql(null)

            });

        })

    })
})