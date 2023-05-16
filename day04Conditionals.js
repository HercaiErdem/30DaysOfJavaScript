
// Conditions can be implementing using the following ways:
// if, if else, if else if else, switch, ternary operator

// IF
// syntax
//if (condition) {
    //this part of code runs for truthy condition
  //}

  let num = -10
  if(num<=0){
  console.log(num +" is a negative number ") // -10 is a negative number 
  }

  // If Else
  // syntax
//if (condition) {
  // this part of code runs for truthy condition
//} else {
  // this part of code runs for false condition
//}

let num02 = -4

if(num02>0){
    console.log("This is a positive number")
}else
console.log("This is a negative number") // This is a negative number

let isSunny = true

isSunny=false
if(isSunny){
    console.log("You need sunglasses")
}else{
    console.log("You do not need to wear sunglasses") //You do not need to wear sunglasses
}

//let result = prompt("10 + 10 kac eder?", "10 + 10")
//if(result== "20"){
  //  console.log("Tebrikler dogru cevabi verdin!")
//}else{
  //  console.log("Uzgunum cevabin yanlis")
//}

 // If Else if Else

 // syntax
//if (condition) {
    // code
//} else if (condition) {
  // code
//} else {
   //  code
//}

let a = 0
if(a>0){
    console.log(a + " is a positive number")
}else if(a<=0){
console.log(a + " is a negative number or zero")
}else {
    console.log(a + " is not a number")
}
// 0 is a negative number or zero


let b = "b"
if(b>0){
    console.log(b + " is a positive number")
}else if(b<0){
console.log(b + " is a negative number")
}else if(b==0){
    console.log(b + "is zero")
}else{
    console.log(b + " is not a number")
}
// 0 is not a number

let result = prompt("Bir sayi giriniz!")
if(result>0){
    console.log( "This is a positive number")
}else if(result<0){
    console.log("This is a negative number")
}else if(result==0){
    console.log("This is zero")
}else{
    console.log("This is not a number")
}

let weather= "winter"
if (weather === 'winter') {
  console.log('You need a rain coat.')
} else if (weather === 'fall') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'summer') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}










