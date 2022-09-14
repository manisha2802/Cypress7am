function getUser(page){
    fetch(`https://reqres.in/api/users?page=${page}`)
    .then(function(res){
        let res1=res.json()
        console.log(res1)

    })
}
getUser(2)