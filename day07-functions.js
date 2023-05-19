
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

// 