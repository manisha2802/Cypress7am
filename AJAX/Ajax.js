
//Synchronous
function add(a, b) {
   console.log("Addition of 2 nos are:",a+b)
}

function sub(a,b){
    console.log("Substraction of 2 nos are:",a-b)
}

sub(35,25)
add(10, 20)


//Asynchronous

let a = function () {

    setTimeout(function () {
        console.log("Hello World!")

    }, 2000)
}

let b= function(){
    setTimeout(() => {
        console.log("Bye Bye")
    }, 1000);
}
a()
b()


//Call Back hell
let func = function () {

    setTimeout(function () {
        console.log("Hello World!")

        setTimeout(() => {
            console.log("Bye Bye")
        }, 1000);

    }, 2000)
}
func()

//Promise 1

let pro = new Promise(function(resolve, reject){
let a=10, b=20;
if(a>b){
    resolve("A is greater")
}
else{
    reject("B is greater")
}
}).then(function(str){
    console.log(str)
}).catch(function(str){
    console.log(str)
})


// Promise 2

let p1=new Promise(function(resolve, reject){

    let name= "Manisha"
    if(name.length > 5)
    {
        resolve(["Java", "Selenium"])
    }
    else
    {
        reject(["JavaScript", "Cypress"])
    }
})
p1.then(function(arr1){
    console.log(arr1[1])
})
p1.catch(function(arr1){
    console.log(arr1[1])
})
.finally(function(){
    console.log("I will always run")
})


