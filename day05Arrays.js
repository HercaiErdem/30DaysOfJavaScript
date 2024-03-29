
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

const numbers = [2, 3, 0, 9.9, -10],
  cities = ["Ankara", "New York", "Toronto", "Sidney"]
   cousins = ["Hercai", 25, "Merve", 24, "Sureyya", 20]


console.log(numbers,cities, cousins) // (5) [2, 3, 0, 9.9, -10] (4) ['Ankara', 'New York', 'Toronto', 'Sidney']..........
console.log("Numbers of cities: "+ cities.length) // Numbers of cities: 4
console.log(cousins.length)

//Array can have items of different data types

const personelInfo =["Hercai", "Erdem", 25, "Ankara", null]
console.log(personelInfo) // ['Hercai', 'Erdem', 25, 'Ankara', null]
console.log(personelInfo.length) // 5

//An array using split

let javaWord= "Java"
let splitJavaWord = javaWord.split('')
console.log(splitJavaWord) // ['J', 'a', 'v', 'a']

let myFirstName = "hercai"
 let toUpperMyFirtName = myFirstName.toUpperCase()
 let splitToUpperMyFirtName = toUpperMyFirtName.split('')

 console.log(splitToUpperMyFirtName)



let sentence = "Alanya's weather is awesome"
let splitSentence = sentence.split(' ')
console.log(splitSentence) // ["Alanya's", 'weather', 'is', 'awesome']

// Accessing array items using index

let str ="Hello today is a great day",
  splitStr = str.split(" ")
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

const nmbrs = [1, 4, 10, 100, -45, 5.8]

nmbrs[4] = 45
let lastIndexNumbr = nmbrs.length-1
nmbrs[lastIndexNumbr] =  6
console.log(nmbrs) // [1, 4, 10, 100, 45, 6]

// Methods to manipulate array
// These are some of the available methods to deal with arrays:Array, length, concat, indexOf, slice,
// splice, join, toString, includes, lastIndexOf, isArray, fill, push

//Array Constructor
const emptyArr =Array(),
  tenEmptyArr = Array(10)
console.log(tenEmptyArr) //10) [empty × 10]

//Creating static values with fill

const tenHercaiValues = tenEmptyArr.fill("Hercai")
console.log(tenHercaiValues) //(10) ['Hercai', 'Hercai', 'Hercai', 'Hercai', 'Hercai', 'Hercai', 'Hercai', 'Hercai', 'Hercai', 'Hercai']

const twoEmptyArr = Array(2)
const two4Values= twoEmptyArr.fill(4)
console.log(two4Values) //(2) [4, 4]

// Concatenating array using concat -> Birleştirmek

const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const num = [1, 2, 3, 4, 5, 6, 7]
const season = ["winter", "spring", "summer", "fall"]
const dayAndNum = day.concat(num) 
console.log(dayAndNum) //14 ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 1, 2, 3, 4, 5, 6, 7]
const numAndDay = num.concat(day) 
console.log(numAndDay) //14 [1, 2, 3, 4, 5, 6, 7, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const lessons = ["mat", "fen", "müzik", "tarih"]
const hoursOfLessons = [5, 5, 1, 3]
const lessonsAndHoursOfLessons = lessons.concat(hoursOfLessons)
console.log(lessonsAndHoursOfLessons)


const thirdList = season.concat(day, num)
console.log(thirdList) //18) ['winter', 'spring', 'summer', 'fall', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 1, 2, 3, 4, 5, 6, 7]

//Getting array length
console.log(num.length) // 7

// indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.
console.log(num.indexOf(8)) //-1
console.log(num.indexOf(6)) //5

const vegetable = ["Zukkini", "Pepper", "Cucumber", "Cauliflower", "Celery"]
let index = vegetable.indexOf("Zukkini")

if(index== -1){
    console.log("This vegetable does not exist in the array")
}else{
    console.log("This vegetable does exist in the array")
}
//This vegetable does exist in the array







console.log(index== -1 ? "This vegetable does not exist in the array" : "This vegetable does exist in the array") //This vegetable does exist in the array

// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

const capitalCity= ["Tokyo", "Istanbul", "Berlin", "London"]
console.log(capitalCity.includes("istanbul"))

let includesOfCity = capitalCity.includes("London") //false
console.log(includesOfCity) //true

// Array.isArray:To check if the data type is an array

console.log(Array.isArray(capitalCity)) //true
let name = "Hercai"
console.log(Array.isArray(name)) //false

let nameSplit= name.split("")
console.log(Array.isArray(nameSplit)) //true

//toString:Converts array to string

const persInfo = ["Hercai", "Erdem", 25, "Ankara"]
let stringPersInfo= persInfo.toString()
console.log(stringPersInfo) // Hercai,Erdem,25,Ankara

// join: It is used to join the elements of the array, the argument we passed in the join method will be 
//joined in the array and return as a string

let joinPersInfo= persInfo.join()
console.log(joinPersInfo) //Hercai,Erdem,25,Ankara
console.log(persInfo.join("$")) //Hercai$Erdem$25$Ankara
console.log(persInfo.join(" | ")) // Hercai | Erdem | 25 | Ankara

// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

console.log(capitalCity) // ['Tokyo', 'Istanbul', 'Berlin', 'London']

console.log(capitalCity.slice()) //['Tokyo', 'Istanbul', 'Berlin', 'London']
console.log(capitalCity.slice(0)) // ['Tokyo', 'Istanbul', 'Berlin', 'London']

let sliceCapitalCity = capitalCity.slice(0, capitalCity.length-1)
console.log(sliceCapitalCity) // ['Tokyo', 'Istanbul', 'Berlin']

let sliceCapitalCity02 = capitalCity.slice(1,3)
console.log(sliceCapitalCity02) // ['Istanbul', 'Berlin']

// Push: adding item in the end.

console.log(persInfo) //['Hercai', 'Erdem', 25, 'Ankara']

persInfo.push(1.66)
console.log(persInfo) //['Hercai', 'Erdem', 25, 'Ankara', 1.66]

// pop: Removing item in the end.

let fruits = ['banana', 'orange', 'mango', 'lemon', "strawberry"]

fruits.pop()
console.log(fruits) // ['banana', 'orange', 'mango', 'lemon']

fruits.pop()
console.log(fruits)

// shift: Removing one array element in the beginning of the array.

console.log(fruits) // ['banana', 'orange', 'mango', 'lemon']

fruits.shift()
console.log(fruits) //['orange', 'mango', 'lemon']

//unshift: Adding array element in the beginning of the array.
fruits.unshift("apple")
console.log(fruits) // ['apple', 'orange', 'mango', 'lemon']

// reverse: reverse the order of an array. (Tersten yazdirma)

fruits.reverse()
console.log(fruits) // ['lemon', 'mango', 'orange', 'apple']

let myName = "Hercai",
  revese = myName.split("").reverse().join("")
console.log(revese) //iacreH

//Array can store different data types including an array itself

const numbersAndLetters= [1,3, [0,8,77], "A","V"]

console.log(numbersAndLetters[0]) // 1
console.log(numbersAndLetters[2][2]) // 77
