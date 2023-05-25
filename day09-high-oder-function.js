
// Higher Order Function
// Higher order functions are functions which take other function as a parameter or return a function as a value.

//CallBack
//A callback is a function which can be passed as parameter to other function.

//Setting time

// setInterval
// setTimeout

// Setting Interval using a setInterval function
// to do some activity continuously with in some interval of time. 
// The setInterval global method take a callback function and a duration as a parameter.
// The duration is in milliseconds and the callback will be always called in that interval of time.

// syntax
// function callback() {
    // code goes here
  // }
  // setInterval(callback, duration)

//   function sayHello(){
// console.log("Hello")

//   }
// setInterval(sayHello,1000) // // it prints hello in every second, 1000ms is 1s

//setTimeout higher order function to execute some action at some time in the future. 

// syntax
//function callback() {
    // code goes here
 // }

  //setTimeout(callback, duration) // duration in milliseconds => Kodu ayarladigimiz zamanda calistiriyor.

//   function sayHello2(){
//  console.log("Hello2")

//   }
//   setTimeout(sayHello2, 2000)


// Functional Programming
/*
Instead of writing regular loop, latest version of JavaScript introduced lots of built in methods which can 
help us to solve complicated problems. All builtin methods take callback function. In this section, we will see 
forEach, map, filter, reduce, find, every, some, and sort.
*/

//forEach

let sum = 0;
const numbers = [1,3,5,7];
numbers.forEach(num=> sum += num)

console.log(sum)

let upperCities = []
let cities = ["Ankara", "Sidney", "Toronto", "Malta"]

cities.forEach(city => upperCities.push(city.toUpperCase()))
// console.log("cities ",cities)
// console.log("upper cities ",upperCities);

/*
push()
 Varolan bir Array içerisine yeni bir item atamaya yarar 
örn: ["item1","item2"].push("item3") şu şekilde bir çıktı verir ["item1","item2","item3"]
*/

// map: 
//Iterate an array elements and modify the array elements. It takes a callback function with 
//elements, index , array parameter and return a new array.

console.log(
  cities.map(city => city.toUpperCase())
)

const fruits =["Apple", "Banana", "Strawberry", "Watermelon"]

const upperFruits= fruits.map((fruit) => fruit.toUpperCase())

console.log(upperFruits)


const fruitsFirstTwoLetters = fruits.map((fruit) =>
  fruit.toLowerCase().slice(0, 2)
)
console.log(fruitsFirstTwoLetters);

// filter
// Filter out items which full fill filtering conditions and return a new array.

const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 90)
console.log(scoresGreaterEighty)

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]
const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
)
console.log(countriesHaveFiveLetters)

/*
sort: The sort methods arranges the array elements either ascending or descending order. 
By default, the sort() method sorts values as strings.This works well for string array items but not for numbers. 
If number values are sorted as strings and it give us wrong result. Sort method modify the original array.
*/