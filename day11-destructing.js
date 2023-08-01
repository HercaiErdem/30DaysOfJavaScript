
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

// spread operator(...)

const realitiveNames = ["Ergul", "Zafer", "Elnur", "Kayra", "Ayse", "Fatma"]

let [myMomName, myFatherNamee, , MyBroName, ...theOthers] = realitiveNames
console.log(realitiveNames)
console.log(myMomName, myFatherNamee, MyBroName)
console.log(...theOthers)


// Konudan ayrı Iterator operator

const fruits =["banana", "strawberry", "blue berry", "passion fruit", "grape"];

for(const fruit of fruits) {
console.log(fruit)
}

// Destructuring Object

const user = {

    name : "hercai",
    surname : "erdem",
    pets : {
        dog : ['Agah'],
        bird : ['Subat']
    }
}
console.log(user)
const {name, surname, pets } = user
console.log(name, surname, pets ) 

// Renaming during structuring
let {name : isim, surname : soyIsim, pets : evcilHayvan} = user
console.log(isim,soyIsim, evcilHayvan)

// konudan alakasız Funtion örnegi

function arithmeticOperation (num1, num2, num3) {

    return (num1 * num2 + num3 )

}
console.log(
    arithmeticOperation(10,3,5)
)

const positiveNumbers = [3,6,8]
console.log(
    [1,2,...positiveNumbers,9]
)