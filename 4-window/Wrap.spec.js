///<reference types="cypress"/>

describe('Validate wrap() functionality', function () {


    let add = function (x, y) {

        return new Promise(function (resolve, reject) {   //JS is async in nature
            setTimeout(function () {
                resolve(x * y)
            }, 1000)
        })
    }
    it('TC-01 Verify the wrap() functionality', function () {

        let str = "Manisha"   //we can't apply assersion directly on string,objects and arrays
        cy.wrap(str).should('eq', "Manisha")  // to make cypress el (to assert)

        let arr = ["Manisha", "Hina", "Rani"]
        cy.wrap(arr).should('include', "Rani")

        let obj = {
            name: "Manisha",
            city: "Pune"
        }

        cy.wrap(obj).should('have.a.property', 'city')

    })

    it('TC-02', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name=first_name]').then(function (name) {  //name is jquery element
            name.val('Manisha')
            cy.wrap(name).type("Rani")  //converted into cypress element
           
            //using javascript
            // add(10, 30).then(function(a){
            //     cy.log(a)
            // expect(a).to.eq(300)
            // })

            //using Wrap() in cypress
            let a=add(10,20)
            cy.wrap(a).should('eq',200)

        })
    })
})