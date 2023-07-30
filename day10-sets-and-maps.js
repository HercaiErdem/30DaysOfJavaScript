
// Set ile Array in arasındaki en buyuk fark; Set de her bir eleman "unique" olmalı.

// Creating an empty set

const companies = new Set()
console.log(companies)

// Creating set from array

const cities = ["Ankara", "Istanbul", "Bursa", "Osmaniye"]
const setOfCities = new Set(cities)
console.log(setOfCities)

for(const city of setOfCities){

console.log(city)

}

// Adding an element to a set
console.log(setOfCities.size) //4

setOfCities.add("Mugla")
setOfCities.add("Marmaris")

console.log(setOfCities.size) //6
console.log(setOfCities)

const names =["Hercai", "Sevval", "Erdem", "Memet"]
const setOfNames = new Set()

for(name of names){
setOfNames.add(name)

}
console.log(setOfNames)

console.log(setOfNames.has("Sevval"))

// Deleting an element a set

setOfNames.delete("Sevval")
console.log(setOfNames)
console.log(setOfNames.size) // set lerde length method unu degil size method unu kullanıyoruz
console.log(setOfNames.has("Sevval"))























