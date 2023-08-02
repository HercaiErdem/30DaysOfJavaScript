
//Declaring regular expression without global flag and case insensitive flag.
// without flag

let pattern = "love"

let regEx= new RegExp(pattern)

// Declaring regular expression with global flag and case insensitive flag.

// i case sensetive i ortadan kaldırıyor

let pattern02 = "love"
let flag = "gi"
let regEx02 = new RegExp(pattern02, flag)

let regEx03 = new RegExp("love", "gi")

// Declaring regular expression with global flag and case insensitive flag.

let regEx04 = /love/gi 

let regEx05 = new RegExp("love", "gi") //regEx04 eşittir

// test():Tests for a match in a string. It returns true or false

const str = "I LOVE javascript"
const pattern03 = /love/i
const result = pattern03.test(str)
console.log(result)

//const comment = prompt("Bana iltifat et")
//const word = /güzel/i
//const testWord = word.test(comment)
// console.log(testWord)


// match() returns an array containing the pattern, index, input and group

const string = "L love myself and I LOVE my world"
const pattern04 = /love/gi
const matchControl = string.match(pattern04)
console.log(matchControl)

// search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

const searchControl = string.search(pattern04)
console.log(searchControl)

const sntc = prompt("write my full name")
const searchMyName = /hercai/gi
const searchMyNameControl = sntc.search(searchMyName)
console.log(searchMyNameControl)