// let promise1 = new Promise(function (res,rej) {
//     if (res == false) {
//         return
//     }else{
//         return
//     }
// })
// promise1.then(function(data){
//     console.log('resolve');
// }).catch(function(err){
//     console.log('reject');
// })




// fetch
// async function Name() {
//     let raw = await fetch(`https://randomuser.me/api/`)
//     let jsonData = await raw.json()
    // console.log(jsonData);
    // let gender = jsonData.results[0].gender
    // let loc = jsonData.location[0].street
    // let city = jsonData.results[2].city
    // let timez = jsonData.results[3].timezone
    // console.log("Gender", gender);
    // console.log("Location:", loc);
    // console.log("City:", city);
    // console.log("TimeZ:",timez);
    // console.log(jsonData.results[0].gender);
    // console.log(jsonData.info);
//     console.log(jsonData.results[0].gender);
//     // console.log("Name :", jsonData.results[0].name.first );
//     console.log("Location :", jsonData.results[0].location.state );
//     console.log("Email :", jsonData.results[0].email );
//     console.log("Login :", jsonData.results[0].login.username);
//     console.log("Date :", jsonData.results[0].dob.date);
// }
// Name()

document.querySelector('button').addEventListener('click',()=>{
    getData()
})

async function getData(){
    let raw = await fetch(`https://randomuser.me/api/`)
    let  formateData = await raw.json()
    let dis = formateData.results[0]
        document.querySelector('.d1>p').innerHTML = `${dis.name.first === undefined ? "Not Found":dis.name.first}`
        document.querySelector('.d2>p').innerHTML = `${dis.gender === undefined?"Not Found":dis.gender}`
        document.querySelector('.d3>p').innerHTML = `${dis.dob.age === undefined ? "Not Found":dis.dob.age}`
        document.querySelector('.d4>p').innerHTML = `${dis.location === undefined ? "Not Found":dis.location.street.name}`
        document.querySelector('.d5>p').innerHTML = `${dis.location.country === undefined ? "Not Found":dis.location.country}`
        document.querySelector('.d6>p').innerHTML = `${dis.dob.date === undefined ? 'Not found':dis.dob.date}`
        document.querySelector('.d7>p').innerHTML = `${dis.email === undefined? 'Not found':dis.email}`
        document.querySelector('.d8>p').innerHTML = `${dis.email.username === undefined? "Not Found":dis.email.username}`
        document.querySelector('.d9>img').src = `${dis.picture.medium === undefined ? 'Not found' :dis.picture.medium}`

        // let imgTg = document.createElement('img')
        // imgTg.src = formateData.results[0].picture.medium
        // document.querySelector('.d9').appendChild(imgTg)

}