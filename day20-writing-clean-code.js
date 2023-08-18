
// Airbnb JavaScript Style Guide
//  I would also recommend to try it. Their style is very easy to use and simple to understand.

/*
Coding conventions helps:

to write clean code
to improve code readability
to improve code re-useability and maintainabilit
*/

/*
- We used camelCase for variables and functions.
- All variable names start with a letter.
- We chose to use const for constants, arrays, objects and functions. In stead of double-quote(""), we chose to use single quote or backtick. 
 Single quote is becoming trendy.
- We also removed semicolons(;) from our code but it is a matter of personal preference.
- Arrow function instead of function declaration
- We prefer this +=, -=, *= /=, **= instead of the longer version
-When we use console.log() it is good to print with a tag string to identify from where the console is coming
*/

// Arrays
 // We chose to make array names plural

 // arrays

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const languages = ['Amharic', 'Arabic', 'English', 'French', 'Spanish']
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python']
const fruits = ['banana', 'orange', 'mango', 'lemon']
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']

console.log(
new Date().toLocaleDateString() 
) // 12.08.2023 , mevcut tarihi veriyor

// Loops



for ( let i = 90; i < 100; i++){
    console.log(i)
}

// declaring an array variable
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// iterating an array using regular for loop
let len = names.length;
for(let i = 0; i < len; i++){
    console.log(names[i].toUpperCase())
}


// iterating an array using for of
for( const name of names) {
    console.log(name.toUpperCase())
}

// iterating array using forEach 
names.forEach((name) => name.toUpperCase())























