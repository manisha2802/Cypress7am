export class loginPage {

    navigate(url) {

        cy.visit(url)
    }
    getFirstName(fName) {
        cy.get('[name="first_name"]').type(fName)

    }
    getLastName(lName) {
        cy.get('[name="last_name"]').type(lName)

    }
    getEmail(email) {
        cy.get('[name="email"]').type(email)
    }
    getComment() {
        cy.get('[name="message"]').type("Hello World")

    }
    clickOnSubmit() {
        cy.get('[type="submit"]').click();

    }
}




