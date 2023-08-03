
//We can style logging message using css

console.log(
    "%c 30 days of javascript", 
    "color: green; font-size:20px; font-family: ariel; text-shadow: 0 0 10px red  ")     

console.log("Today's %ctoo%c %chot%c here",

"color: red; font-size:20px; text-shadow: 0 0 10px; red",
"",
"color: red",
""
)


console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow',
  ""
) // log output green red and yellow text

console.warn("This is a warning message not a error message")

console.error("This is a error message, you should be careful")

const names = ["Memet", "hercai", "sevval"]
console.table(names)

const user= {
name : "hercai",
surname : "erdem",
"country": "Turkey",
pet:{
    dog: "Agah",
    bird: "subat"
}

}
console.table(user)

console.info("This is a information message and equal to log  method")


console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

const name02= "hercai"
const surName= "erdem"

console.assert(name02.length<surName.length, "name02 nin leght i surName in lenght inden daha fazladir.")

//console.clear()