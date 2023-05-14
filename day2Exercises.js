
//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let named = '30 Days Of JavaScript'

//Print the string on the browser console using console.log()
console.log(named)

//Print the length of the string on the browser console using console.log()
let namedLength = named.length
console.log(namedLength) // 21

//Print D letter on the browser console using console.log()
let dLetter = named[3]
console.log(dLetter) //D
//Change all the string characters to capital letters using toUpperCase() method
let strToUpperCase = named.toLocaleUpperCase()
console.log(strToUpperCase) // 30 DAYS OF JAVASCRIPT
//Change all the string characters to lowercase letters using toLowerCase() method
let strToLowerCase = named.toLowerCase()
console.log(strToLowerCase) // 30 days of javascript
//Cut (slice) out the first word of the string using substr() or substring() method
let strSubstring = named.substring(0,2)
console.log(strSubstring) //30
//Check if the string contains a word Script using includes() method
let strIncludes = named.includes("Script")
console.log(strIncludes) //true
//Split the string 30 Days Of JavaScript at the space using split() method
let strSplit = named.split(" ")
console.log(strSplit) //  '30', 'Days', 'Of', 'JavaScript'
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let strReplace = named.replace("JavaScript", "Python")
console.log(strReplace) // 30 Days Of Python
//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
let strCharAt= named.charAt(15)
console.log(strCharAt) //S
console.log(named.charAt(15)) //S
//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let strIndexOf = named.indexOf("Da")
console.log(strIndexOf) // 3
console.log(named.indexOf("of")) //-1
//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
let strLastIndexOf = named.lastIndexOf("ript")
console.log(strLastIndexOf) //17
console.log(named.lastIndexOf("H")) //-1

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:
//'You cannot end a sentence with because because because is a conjunction'
let sampleIndexOf = 'You cannot end a sentence with because because because is a conjunction'
let indexOfBecauseSntc = sampleIndexOf.indexOf("because")
console.log(indexOfBecauseSntc) // 31

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:
//'You cannot end a sentence with because because because is a conjunction'
let sampleLastIndexOf = 'You cannot end a sentence with because because because is a conjunction'
let lastIndexOfBecauseSntc = sampleIndexOf.lastIndexOf("because")
console.log(lastIndexOfBecauseSntc) //47

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let sntc = ' 30 Days Of JavaScript '
let sntcTrim = sntc.trim(" ") // 30 Days Of JavaScript
console.log(sntcTrim)

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
let namedStartsWith = named.startsWith("30")
console.log(namedStartsWith) // true

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
let namedEndsWith = named.endsWith("ript") // true
console.log(namedEndsWith)

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let numb = '9.8'
let numParseFloat = parseFloat(numb)
console.log(numParseFloat) // 9.8
console.log(typeof numParseFloat) // number
let numbRound = Math.round(numb)
console.log(numbRound) //10

//Generate a random number between 0 and 100 inclusively.

let randomNumber= Math.floor(Math.random() *101)
console.log(randomNumber)

//Generate a random number between 0 and 255 inclusively.
let randomNumber02 = Math.floor(Math.random() * 256)
console.log(randomNumber02)