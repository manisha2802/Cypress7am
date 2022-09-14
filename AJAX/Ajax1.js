// function one(){
//     console.log('one')
// }

// function two(){
//     console.log('two')
// }

// two()
// one()


// program 


// function one(){
//    // async
//     setTimeout(function(){
//         console.log('one')
//     },2000)
// }

// function two(){
//     console.log('two')
// }

// one()
// two()



// aysn code ----- sync manage

// api ------ usercreate   // async
// id -- getInfo // async
// printInfo // async


function getUserInfo() {
    // createUser
    setTimeout(function () {
        console.log('user created')
    }, 3000)

    // getUserById

    setTimeout(function () {
        console.log('get user id') //
    }, 2000)

    setTimeout(function () {
        console.log('get user info') // 
    }, 1000)
}

//getUserInfo()
//async code ---- sync ----- call back hell

// call back hell
function getUserInfo2() {
    setTimeout(function () {
        console.log('user created')
        setTimeout(function () {
            console.log('get user id')
            setTimeout(function () {
                console.log('get user info')
            }, 1000)
        }, 2000)

    }, 3000)
}
//getUserInfo2()

// // promises

// let pro = new Promise(function(resolve, reject){
//     let a = 10
//     let b = 20

//     if(a == b){
//         resolve('hello')
//     }
//     else {
//         reject('bye')
//     }
// })

// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// let a = new Promise(function(resolve,reject){
//     let fullName = "chinmay"

//     if(fullName.length > 10){
//         resolve(['javascript',"python"])
//     }
//     else {
//         reject(['c#',"selenium"])
//     }

// })

// a.then(function(arr){
//     console.log(arr[0])

// })
// .catch(function(arr){
//     console.log(arr[1])
// })


// let b = new Promise(function(resolve,reject){

//     let a = 10
//     let b = 2

//     if(a > b){
//        resolve('a is greater')
//     }
//     else {
//        reject('b is greater')
//     }

// })

// b.then(function(str){
//     console.log(str)
// }).
// catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log('i will run always')
// })

// Promblem
// function getUserInfo2() {
//     setTimeout(function () {
//         console.log('user created')
//         setTimeout(function () {
//             console.log('get user id')
//             setTimeout(function () {
//                 console.log('get user info')
//             }, 1000)
//         }, 2000)

//     }, 3000)
// }


// solution


// let pro = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         if ('usercreated') {
//             resolve('user created')
//         }
//         else {
//             reject('user not created')
//         }
//     }, 3000)
// })

// function getUserId() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if ('userId') {
//                 resolve('get user id')
//             }
//             else{
//                 reject('user id not found')
//             }
//         }, 2000)

//     })
// }
// function getUserInfo() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if ('userInfo') {
//                 resolve('get user info')
//             }
//             else {
//                 reject('user info not found')
//             }
//         }, 1000)
//     })
// }
// pro.then(function (str) {
//     console.log(str)
//     return getUserId()
// })
//     .then(function (str) {
//         console.log(str)
//         return getUserInfo()
//     })
//     .then(function (str) {
//         console.log(str)
//     })
//     .catch(function (str) {
//         console.log(str)
//     })
//     .finally(function () {
//         console.log("i will run")
//     })


// asyn function

function createUser(){
    return  new Promise(function (resolve, reject) {
        setTimeout(function () {
            if ('usercreated') {
                resolve('user created')
            }
            else {
                reject('user not created')
            }
        }, 3000)
    })
}
function getUserId() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if ('userId') {
                resolve('get user id')
            }
            else{
                reject('user id not found')
            }
        }, 2000)

    })
}
function getUserInfo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if ('userInfo') {
                resolve('get user info')
            }
            else {
                reject('user info not found')
            }
        }, 1000)
    })
}

let getInfo = async function(){
    let a = await createUser()
    console.log(a)
    let b = await getUserId()
    console.log(b)
    let c = await getUserInfo()
    console.log(c)
}
getInfo()