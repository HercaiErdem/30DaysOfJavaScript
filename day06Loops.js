
// for Loop

// For loop structure
// for(initialization, condition, increment/decrement){ ilki baslangic degeri, ikinci kosul, ucuncu ise arttima veya azaltma
    // code goes here
// }

for(i=2; i<=10; i ++){
console.log(i) //2,3,4,5,6,7,8,9,10
}

for(i=10; i>=6; i--){
console.log(i) //10,9,8,7,6
}

for(i=7; i>=3; i--){
console.log(`${i} * ${i} = ${i*i}`)
}

//7 * 7 = 49
// 6 * 6 = 36
 // 5 * 5 = 25
 //4 * 4 = 16
 //3 * 3 = 9

 const capitalCities = ['Ankara', 'Baku', 'Berlin', 'London', 'Madrid']
for(let i = 0; i < capitalCities.length; i++){ 
  console.log(capitalCities[i].toUpperCase())
}


const numbers =[5,6,7,8,9,10]
let sum = 0
for(i=0; i<numbers.length; i++){

    sum = sum+numbers[i] //sum+=numbers[i]
    
}
console.log(sum) //45

const numbers02= [0, 10, 3, 5, 6, 7],
   newArr = []
sum = 0
for(let i = 0; i < numbers02.length; i++){
  newArr.push( numbers02[i] ** 2)

}
console.log(newArr)  // [0, 100, 9, 25, 36, 49]

// while loop: for ile ayni gorevi yapiyor.
