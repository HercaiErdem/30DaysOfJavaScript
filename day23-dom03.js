
// Event Listeners
// Common HTML events:onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload. 
// The addEventListener() method takes two arguments, an event listener and a callback function.

const button = document.getElementById("btn")

button.addEventListener( "event", function(e){

}) // genel kullanim boyle 

button.addEventListener( "event", e => {

}) // bu da arrow funtion li kullanimi

//Click
button.addEventListener("click", function(e){

    console.info("Button double clicked!")

})

// Double Click

 const button02 = document.getElementById("btn")

button02.addEventListener( "dblclick", function(e){
    console.log(e)

}) 

// Mouse Enter
const button03 = document.getElementById("btn")

button03.addEventListener( "mouseenter", function(e){
    console.log(e)
})

