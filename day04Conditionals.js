
// Conditions can be implementing using the following ways:
// if, if else, if else if else, switch, ternary operator

// IF
// syntax
//if (condition) {
    //this part of code runs for truthy condition
  //}

  let num = -10
  if(num<=0){
  console.log(num +" number is a negative number ") // -10 is a negative number 
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
console.log( num02+" number is a negative number") // This is a negative number

let isSunny = true

isSunny=false
if(isSunny){
    console.log("You need sunglasses")
}else{
    console.log("You do not need to wear sunglasses") //You do not need to wear sunglasses
}

let isMemetLivenInAlanya = false;

if(isMemetLivenInAlanya){

console.log("Memet lives in Alanya")

}else{
    
    console.log("Memet has been living in Kadirli for a while" )

}


let result = prompt("10 + 10 kac eder?", "sonucu buraya yazin")
if(result== "20"){
    console.log("Tebrikler dogru cevabi verdin!")
}else{
   console.log("Uzgunum cevabin yanlis")
}


//let  memetsJob = prompt("Memet'in mesleği nedir?", "Buraya yazin")
//if(memetsJob== "full + full stack developer"){

  //  console.log("Tebrikler! Memet'in mesleğini bildiniz" )

// } else{

// console.log("Yanlis cevap verdiniz, Memet full + full stack developer")
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

let number = prompt("Bir sayi giriniz!")
if(number>0){
    console.log( "This is a positive number")
}else if(number<0){
    console.log("This is a negative number")
}else if(number==0){
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

// Switch
// Switch is an alternative for if else if else else. 

//switch(caseValue){
  //case 1:
      // code
    //  break
    // case 2:
     // code
     // break
    // case 3:
     // code
     //break
    //default:
     // code
  //}

let numbers = prompt("Bir sayi giriniz")
switch(numbers){

case  (numbers> 0) :
     console.log(numbers + " pozitif bi sayidir")
  break
  
  case (numbers== 0 ):
       console.log(numbers + " nötür bir sayidir")
 break

 case (numbers < 0) :
       console.log(numbers+ " negatif bir sayidir")
 break
 
 default :
       console.log("Girdiğiniz karakter bir sayi değildir")

 }

let monthUserInput= prompt("What month is it now?")
let month = monthUserInput.toLowerCase()
switch(month){
    case "january":
        console.log("Month is january" )
  break
  case "february":
        console.log("Month is february" )
  break
  case "march":
    console.log("Month is march" )
break
case "april":
    console.log("Month is april" )
break
case "may":
    console.log("Month is may" )
break
case "june":
    console.log("Month is june" )
break
case "july":
    console.log("Month is july" )
break
case "august":
    console.log("Month is august" )
break
case "september":
    console.log("Month is september" )
break
case "october":
    console.log("Month is october" )
break
case "november":
    console.log("Month is november" )
break
case "december":
    console.log("Month is december" )
break
default :
console.log("It is not a month")

}

// Ternary Operators
console.log(
    result==20 ? "Dogru cevap" : "Yanlis Cevap"
)
