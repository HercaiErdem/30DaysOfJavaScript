
// Assignment operators

let num1= 3
let num2 = 10

console.log(num1+=num2) //13
console.log(num1-=num2) //7
console.log(num1*=num2) //30
console.log(num2/num1) // 0.3333333333333333
console.log(num1**=num2) // 590490000000000

let number1 = 20
let number2 = 2
let sum = number1 + number2
let diff = number1 - number2
let mulf = number1 * number2
let div = number1 / number2
let powerOf = number1 ** number2
let remainder = number1 % number2
console.log(sum, diff, mulf, div, powerOf, remainder) // 22 18 40 10 400 0

// Comparison Operators

let sampleNum01 = 10
let sampleNum02 = '10'

let isEqual = sampleNum01==sampleNum02 // variable a bakiyor
let isExaclyEqual = sampleNum01=== sampleNum02 // hem variable a hem data type
let isGreater = sampleNum02>sampleNum01
let isGreaterThan =sampleNum02>=sampleNum01

console.log(isEqual,isExaclyEqual,isGreater,isGreaterThan) // true false false true

console.log('Hercai' == 'Sevval') //false
console.log('Hercai'.length == 'Sevval'.length) //true

let name01= 'Mehmet'
let named02= 'Berk'
console.log(name01.length!=named02.length) //true

//Logical Operators
// && ampersand operator example
let check01 = 5<6
let check02= 2<9
console.log(check01&&check02) //true
console.log(5<9 && 10<=6) //false

// || pipe or operator, example
let check03 = 4>=4
let check04 = 3.3<2
console.log(check03 || check04) //true
console.log(5>9 || 10<=6) //false
console.log(5<9 || 10>6) //true

//! Negation examples
let check05 = 5
let check06 = 6
console.log(!(check05<check06)) // false
console.log(!(check05>check06)) // true

// Ternary Operators
// condition ? True : False
 let isMarried = true
 ? console.log('You must treat each other well ') // // You must treat each other well
 : console.log ("You  find someone who loves you")

 let isMarried02 = false
 ? console.log('You must treat each other well ')
 : console.log ("You  find someone who loves you") //// You  find someone who loves you

 let num01= 5
 let num02 = 10
 ? console.log("You are good at math") // You are good at math
: console.log("You should study more math")

 // Operator Precedence
console.log(3*4/(6+6)) //1
const a = 8
const b = 2
//console.log(a/b*(a-b)) //24

                             // Window Methods
// Window alert() method
//As you have seen at very beginning alert() method displays an alert box with a specified message and an OK button. 
//It is a builtin method and it takes on argument.
//alert(message)
//Do not use too much alert because it is destructing and annoying, use it just to test.

//alert("Hello, this is my first allert message")

//Window prompt() method
//The window prompt methods display a prompt box with an input on your browser to take input values and the input data 
//can be stored in a variable. The prompt() method takes two arguments. The second argument is optional.

// let promptName = prompt("Enter your name and Surname", "Enter here")
//console.group(promptName) ****************************************** YORUMA ALDİM AMA TEKRAR EDERKEN BAK


// let promptPhoneNum = prompt('Please Enter Your Phone Number', "Enter Your Phone Number Here!")
//console.log(promptPhoneNum)**************************************** YORUMA ALDİM AMA TEKRAR EDERKEN BAK

//Window confirm() method
//The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button. A confirm box is 
//often used to ask permission from a user to execute something.

// let isDelete = confirm("Are you sure you like to delete?")
 //console.log(isDelete)

//let agree = confirm('Are you sure you like to delete?')
//? console.log("Silme islemi basarili")
//: console.log("Silme islemi gerceklestirilemedi")

// Date Object
/*
In JavaScript current time and date is created using JavaScript Date Object. 
The object we create using Date object provides many methods to work with date and time.
The methods we use to get date and time information from a date object values are started with a word get.
 getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()
*/
// Creating a time object
//Once we create time object. The time object will provide information about time.
const date = new Date()

console.log(date) //Mon May 15 2023 16:22:09 GMT+0300 (GMT+03:00)
console.log(date.getFullYear() ) //2023
console.log(date.getMonth()) // 4 because the month is May month(0-11)
console.log(date.getDate()) // 15 because the day of the month is 15th,  day(1-31)
console.log(date.getDay()) // 1, because the day is Monday which is the first day
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)
console.log(date.getHours()) // 16
console.log(date.getMinutes()) // 30
console.log(date.getSeconds()) // 22
console.log(date.getTime()) // 1684158279232

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date02 = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // Mon May 15 2023 16:47:23 GMT+0300 (GMT+03:00)/5/2023 16:47


