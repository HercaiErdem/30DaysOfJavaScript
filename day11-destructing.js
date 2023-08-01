
// Destructing Arrays => Seklini Bozma

const cities = ["Ankara", "Istanbul", "Bursa", "Marmaris","Osmaniye"]

let [firstCity, secondCity, thirdCity, forthCity] = cities

console.log(firstCity, secondCity, thirdCity, forthCity)

const names = ["hercai", "sevval", "memet"]

let [firtsName, secondName, thirdName] =names

console.log("Arrayli: "+ names)
console.log(firtsName, secondName, thirdName)

const animals = [
[ "leon", "cat", "dog"],
[ "bee", "bird","butterfly"]

]

let [landAnimals, flyingAnimals] = animals

console.log(animals)
console.log(landAnimals)
console.log(flyingAnimals)

// If we like to skip on of the values in the array we use additional comma

const numbers =[2, -10 , 22]
let [, num2,] = numbers
console.log(num2)

const countries = ["Canada", "Malta", undefined]

let [firstCounrty, 
    secondCountry,
thirdCountry= "The USA" ] = countries

console.log(firstCounrty, secondCountry,thirdCountry)