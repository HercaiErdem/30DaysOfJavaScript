
// How to create an empty array
// It is very common to use const instead of let to declare an array variable.

// 1. synax 
const arr = Array()
console.log(arr) // []

// 2. synax 
// This the most recommended way to create an empty list
const arr02 = []
console.log(arr02) //[]

// Create an array with values

const numbers = [2, 3, 0, 9.9, -10]
const cities = ["Ankara", "New York", "Toronto", "Sidney"]

console.log(numbers,cities) // (5) [2, 3, 0, 9.9, -10] (4) ['Ankara', 'New York', 'Toronto', 'Sidney']
console.log("Numbers of cities: "+ cities.length) // Numbers of cities: 4

//Array can have items of different data types

const personelInfo =["Hercai", "Erdem", 25, "Ankara", null]
console.log(personelInfo) // ['Hercai', 'Erdem', 25, 'Ankara', null]
console.log(personelInfo.length) // 5

//An array using split

let javaWord= "Java"
let splitJavaWord = javaWord.split('')
console.log(splitJavaWord) // ['J', 'a', 'v', 'a']

let sentence = "Alanya's weather is awesome"
let splitSentence = sentence.split(' ')
console.log(splitSentence) // ["Alanya's", 'weather', 'is', 'awesome']

// Accessing array items using index

let str ="Hello today is a great day"
let splitStr = str.split(" ")
console.log(splitStr) //['Hello', 'today', 'is', 'a', 'great', 'day']

let strFirstLetter = splitStr[0]
console.log(strFirstLetter) //Hello

console.log(splitStr[3]) //a

let strForthLetter = splitStr[4]
console.log(strForthLetter) // great

let strLastLetter = splitStr.length-1
console.log(splitStr[strLastLetter]) // day

// Modifying array element
//An array is mutable(modifiable). Once an array is created, we can modify the contents of the array elements.



















