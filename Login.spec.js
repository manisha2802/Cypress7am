import {loginPage} from "./pages"

describe('',()=>{
    
    const loginP=new loginPage();

    it('',()=>{

        loginP.navigate('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        loginP.getFirstName("Manisha")
        loginP.getLastName("Kamble")
        loginP.getEmail("abc@gmail.com")
        loginP.getComment()
        loginP.clickOnSubmit()



    })
})