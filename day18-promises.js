
/*
A Promise is in one of these states:

- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation completed successfully.
- rejected: meaning that the operation failed.


As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.
*/

// Promise constructor

/*
We can create a new promise using the key word new followed by the word Promise and followed by a parenthesis.
 Inside the parenthesis, it takes a callback function. The promise callback function has two parameters which are 
 the resolve and reject functions.
*/

// syntax
const promise = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
  })

  /*
  const promise01 = new Promise((resolve, reject) => {

 setTimeout(() => {

   // resolve('islem basarili bir sekilde gerceklesti')
      reject(' islem gerceklesmedi')

 }, 1500)

})
*/

promise.then((data) => {

    console.log(data)

}).catch((err) => {
    console.log(err)
})

// Fetch API

const apiUrl = "https://jsonplaceholder.typicode.com/posts"  // api

fetch(apiUrl)
.then(res=>res.json())  // // accessing the API data as JSON
.then(data=> console.log(data)) 
.catch(err=> console.log(err)) // // handling error if something wrong happens

const usersApiUrl = "https://jsonplaceholder.typicode.com/posts/1/comments"
fetch(usersApiUrl)
.then(res => res.json())
.then(data=> console.log(data))
.catch(err => console.log(err))

// Async and Await 
/*
Async and Await her zaman birlikte kullanılıyor, islemleri sirasina koyuyor
Async and await is an elegant way to handle promises. It is easy to understand and it clean to write.
*/

async function getPosts() {
try{
const response = await fetch(apiUrl)
const data = await response.json()
console.log(data)

}catch(err){

console.error(err)
}
}
getPosts()

//Arrow functions
const getPosts02 = async() =>{
    try{
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(data)
        
        }catch(err){
        
        console.error(err)
        }
}
getPosts02()