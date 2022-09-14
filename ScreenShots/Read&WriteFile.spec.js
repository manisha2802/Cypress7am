///<reference types="cypress"/>
describe('Read and write file in cypress',function(){
    it('TC-01 Write file',function(){
        cy.writeFile('file1.txt',"I Am Manisha")
        cy.writeFile('file1.txt',"\nI am Learning Cypress",{flag:'a+'})
    })
    it('TC-02 Write file in fixtures',function(){
        cy.writeFile('cypress/fixtures/file2.json',{

            firstName:"Manisha",
            lastName:"Kamble",
            city:"Pune"
        })
    })
    it('TC-03 read files',function(){   //using file path
        cy.readFile('cypress/fixtures/file2.json').then((data)=>{

            expect(data.city).to.eq("Pune")
        })
    })
    it('TC-04 Read file from fixture',function(){  //using fixcture()
        cy.fixture('info').then((data)=>{
            expect(data.email).to.eq('abc@gmail.com')
        })
    })
})