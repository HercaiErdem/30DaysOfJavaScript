
let numOne = 10
let numeTwo = 10

let js = 'JavaScript'
let php = 'PHP'

let ligthOn= true
let lightOff = false
/*
console.log(numOne==numeTwo) //true
console.log(js==php) //false
console.log(ligthOn==lightOff) // false 
*/

let perInf = ['Hercai', 25, 'Ankara']

perInf[0] // 'Hercai'
perInf[1] // 25
perInf[2] // 'Ankara'
 console.log(perInf)

 perInf[0] = 'Sevval'
 perInf[2] = 'Alanya'
console.log(perInf)

let numbers = [1, 4, 6]
let nums = numbers
console.log(numbers==nums)

console.log(Math.round(3.45)) //3 en yakin sayiya yuvarliyor
console.log(Math.ceil(10.2)) //11 tavan sayiya yuvarliyor  rounding up
console.log(Math.floor(10.2)) //10 taban sayiya yuvarliyor  rounding down

console.log(Math.min(-2, 0, 5, 100, -30)) // -30 returns the minimum value
console.log(Math.max(-2, 0, 5, 100, -30)) // 100 returns the maximum value

console.log(Math.floor(Math.random() * 11)) //0 ile 10 arasinda random bir sayi istersek
console.log(Math.floor(Math.random() * 15)) //0 ile 14 arasinda random bir sayi istersek

// String Concatenation
let name = "Hercai"
let surname = "Erdem"
let age = 25
 let info = name + ' ' + surname + ' ' + age
 console.log(info)

   //1. length:
   let name02 = "Hercai Sevval"
   let nameLegth =name02.length
    console.log(nameLegth) //13

    //2. Accessing characters in a string: Index
    let string = "Javascript guzel bir dil"
    let firstLetter = string[0]
    
    console.log(firstLetter) //J
    
    let lastIndex = string.length-1

    console.log(lastIndex) //23
    console.log(string[lastIndex]) //l

    //3. toUpperCase(): this method changes the string to uppercase letters.

    let city = "california"
     let cityUpperCase = city.toUpperCase()
     console.log(cityUpperCase)
    
    let student = "Ayse Fatma"
    let studentNameUpper = student.toUpperCase()
    console.log(studentNameUpper)

    let country= "canada"
    console.log(country.toUpperCase())

    //4. toLowerCase(): this method changes the string to lowercase letters.

    let countryName= "AmeriCa"
    console.log(country.toLowerCase())

let company = "YiLDiz"
let companyLowerCase = company.toLowerCase()
console.log(companyLowerCase)

// 5. substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.

let sentence = "Japan is a very beautiful country"
let sntcSubstring = sentence.substring(0,5)
console.log(sntcSubstring)     //Japan
console.log(sentence.substring(16,25)) //beautiful
let sntc01 = sentence.substring(26)
console.log(sntc01) //country

// 6. split(): The split method splits a string at a specified place.
 
let string02 = "30 days of the Javascript!"

let spaceSplit = string02.split(' ') 
console.log(spaceSplit) // Split to an array at space -> ['30', 'days', 'of', 'the', 'Javascript!']

let eachLetterSpace = string02.split('')
console.log(eachLetterSpace) // Split to an array at each letter -> ['3', '0', ' ', 'd', 'a', 'y', 's', ' ', 'o', 'f', ' ', 
                                                                    //'t', 'h', 'e', ' ', 'J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't', '!']

// 7. trim(): Removes trailing space in the beginning or the end of a string.

let myName = " Hercai Sevval Erdem "
let myNameTrim = myName.trim(' ')
 console.log(myNameTrim)


 // 8. includes(): It takes a substring argument and it checks if substring argument exists in the string. 
 //includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.

 let sntc = "Javascript is easier language than Java"
 let sntc02= sntc.includes("Javascript")
 console.log(sntc02) //true

 let sntc03= sntc.includes("javascript")
 console.log(sntc03) //false

 let sntc04= sntc.includes("lan")
 console.log(sntc04)  //true

 let sntc05= sntc.includes("eas")
 console.log(sntc05)  //true

 // 9. replace(): takes as a parameter the old substring and a new substring.
 // string.replace(oldsubstring, newsubstring)

 let str = "Hercai is a simple Hercai"
 let str01= str.replace("Hercai", "Sevval")
 console.log(str01) // Sevval is a simple Hercai

 // 10. charAt(): Takes index and it returns the value at that index
  //string.charAt(index)

  let word = "Prototurk"
  let wordCharAt = word.charAt(0)
  console.log(wordCharAt) // P

  let wordCharAt02 = word.charAt(6)
  console.log(wordCharAt02) // u

  // 11. indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring 
                    //if does not exist it returns -1
//string.indexOf(substring)

let sntcSample = "Hello World it's me Hercai"
let indexOfSample = sntcSample.indexOf("he") 
console.log(indexOfSample) //-1

let indexOfSample02 = sntcSample.indexOf("He")
console.log(indexOfSample02) //0

let indexOfSample03 = sntcSample.indexOf(" W")
console.log(indexOfSample03) //5

/*
Changing Data Type (Casting)
Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic 
operations string numbers.
*/
 // String to Int
 // using the following methods: parseInt(),  Number(), or Plus sign(+)

 let num = "98"
 let numInt = parseInt(num)

 console.log(numInt) // 98
 console.log(typeof num) // string
 console.log(typeof numInt) //number

 let numNumber = Number(num)
 console.log(numNumber) // 98

 let numPlus = +num
 console.log(numPlus) //98

// String to Float
// using the following methods: parseFloat(), Number(), Plus sign(+)

let numF = "87.6"
 let numParseFloat = parseFloat(numF)

 console.log(numParseFloat) // 87.6
 console.log(typeof num) // string
 console.log(typeof numInt) //number

 let numNumber02 = Number(numF)
 console.log(numNumber02) // 87.6

 let numPlus02 = +numF
 console.log(numPlus02) //87.6

// Float to Int
// We can convert float numbers to integers. We use the following method to convert float to int: parseInt()

let numFloat = "98.4"
let numFloatToInt = parseInt(numFloat)
console.log(numFloatToInt) // 98
