
// A function is declared by a function key word followed by a name, followed by parentheses (). A parentheses can take a parameter.
// a function has to return certain data types. To get the value we call or invoke a function.
// Function makes code: 1)clean and easy to read, 2)reusable, 3)easy to test

// Function Declaration

//declaring a function without a parameter
//function functionName() {
    // code goes here
  //}
  //functionName() // calling function by its name and with parentheses

  // Function without a parameter and return
  function addition(){
    let num= 5,
       add = num+num 

    console.log(add)
  }
  addition() // 10

  function square() {
 let num01 = 3,
     num02 = 4
 console.log(num01*num02)
  }
square() //12

function myInfo(){
    let firstName = "Hercai",
      secondName = "Sevval",
       lastName = "Erdem",
       age = 25,
      space = " "

    console.log(firstName + space + secondName + space + lastName + space + age )

}
myInfo() // Hercai Sevval Erdem 25

// Function returning value

function myInfo02(){
    let firstName = "Hercai",
         secondName = "Sevval",
         lastName = "Erdem",
        age = 25,
         space = " ",
       fullInfo = firstName + space + secondName + space + lastName + space + age 

    return fullInfo
}
console.log(myInfo02()) // Hercai Sevval Erdem 25

function muliThreeNmbrs(){
    let nmbr01=1,
     nmbr02 = 2,
     nmbr03 = -7,
     multi = nmbr01 * nmbr02 * nmbr03 
    return multi

}
console.log("The result is: " + muliThreeNmbrs()) //The result is: -14

// Function with a parameter

function areaOfCircle(r){

    let area = Math.PI*r*r
    return area
}
console.log("Area of circle is: " +areaOfCircle(5)) // Area of circle is: 78.53981633974483

  
  function programmingLanguages(pl01, pl02, pl03) {
    let fullProgLan= pl01 + pl02 + pl03
    return fullProgLan

  }
  console.log(programmingLanguages("Java", "Javascript", "C#")) //JavaJavascriptC#


  function programmingLanguages(pl01, pl02, pl03) {
    let fullProgLan= pl01 + pl02 + pl03
    return fullProgLan

  }
  let pl01= "Java",
  pl02 = "Javascript",
  pl03 = "C#"
  console.log(programmingLanguages(pl01, pl02, pl03 )) //JavaJavascriptC#


function sumArr(arr){
let sum = 0 
for(let i = 0; i<arr.length; i++) {
sum+= arr[i]
}
return sum;
}
 const arr = [2, 10, 25, 100]
  console.log(sumArr(arr)) // 137

//Anonymous function or without name => funtion yerine data type in adini yazarak olusturdugumuz function'lardir.

const anonymousFunc= function(word){
console.log(word)
}
 let word = "Hello!"
 anonymousFunc(word) //Hello!

 // Arrow Function
 // This is how we write normal or declaration function

function square(n) {
    return n * n
  }
  let n= 2
  console.log(square(n)) // 4
  
//Arrow Function Sample
const square02 = n => {
    return n*n
}
let n02 = 2
console.log(square02(n02)) //4
  

const myFirstName = myName => {
  return myName
}
let myName ="Hercai"
console.log(myFirstName(myName)) //Hercai

//console.log(myFirstName("Hercai")) //Hercai

// SOR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const multiThreeNmbrs = (nm1, nm2, nm3) => {

return `${nm1}+ ${nm2} +${nm3}`
}
let nm1= 1,
      nm2= 10,
      nm3= 5
console.log(multiThreeNmbrs())
console.log(multiThreeNmbrs(nm1, nm2, nm3)) //


 
