
// Scope(Kapsam)
//  scope of variables when we use var or let.
// Variable can be declared globally or locally scope
// Anything declared without let, var or const is scoped at global level.

// Window Global Object

a = "Alanya" //declaring a variable without let or const make it available in window object and this found anywhere
b = 50 // this is a global scope variable and found in the window object

const letsLearnScope = (a,b) =>{
return a+b

}
console.log(letsLearnScope(a,b)) // Alanya50

/*
 Global scope
 A globally declared variable can be accessed every where in the same file.
 Global scope icin let ve const leri ile olusturmamiz yeterli.
 */

let name = "Hercai", //  is a global scope it will be found anywhere in this file  
surname = "Erdem"  //  is a global scope it will be found anywhere in this file

function letsLearnGlobalScope(){
console.log(name,surname) // Hercai Erdem

if(true){ // true olmasi her zaman calistir anlamina gelmektedir
 let name = "Merve",                  // Local Scope
   surname = "Kilic"                  // Local Scope
console.log(name,surname) // Merve Kilic oldu cunku let ile yeni variable lar assing ettik 
}
console.log(name,surname) // Hercai Erdem
}
letsLearnGlobalScope()
console.log(name,surname) // Hercai Erdem

// Local scope
// A variable declared as local can be accessed only in certain block code.

let word = 'Java', // global scope
    num = 35      // global scope
 // Function scope
 function letsLearnLocalScope(){
console.log(word,num) // Java 35, accessible
let value = false
// block scope
if(true){
    // we can access from the function and outside the function but 
    // variables declared inside the if will not be accessed outside the if block

    let word = "Pyhon",
    num = 0,
    c = 20
    value= !value
 console.log(word,num,c,value) // Pyhon 0 20 true
}

 // we can not access c because c's scope is only the if block
  console.log(word,num,value) // Java 35 true
 }

 letsLearnLocalScope()
 console.log(word,num) // Java 35, accessible

 /*
 The scope let and const are the same. The difference is only reassigning.
 We can not change or reassign the value of the const variable. 
 I would strongly suggest you to use let and const, by using let and const you will write clean code and avoid hard to debug mistakes.
 You can use let for any value which change, const for any constant value, and for an array, object, arrow function and function
 */

 // Object (Nesne)
 // Everything can be an object. 
 // An object is a key value pair.
 // To create an object literal, we use two curly brackets{}.
 
 // Creating an empty objec
 const empyObject = {}; // Empy Object i cont ile olusturuyoruz
 console.log(empyObject) // {}

 console.log(typeof empyObject) // object

  // Creating an objecting with values
  // The value of properties or keys could be a string, number, boolean, an object, null, undefined or a function.
  // Each key has a value in the object.

   const square = {
   length: 25,
   width : 25
 }
console.log(square) // {length: 25, width: 25}

  const person = {
    firstName: 'Hercai',
    lastName : 'Erdem',
    age: 25,
    country : "Canada",
    city : "Toronto",
    skills : [
        "Java",
         "Js", 
         "HTML",
          "CSS"
        ]
  }
  console.log(person)























