
// Event Listeners
// Common HTML events:onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload. 
// The addEventListener() method takes two arguments, an event listener and a callback function.

const button = document.getElementById("btn")

button.addEventListener( "event", function(e){

}) // genel kullanim boyle 

button.addEventListener( "event", e => {

}) // bu da arrow funtion li kullanimi

button.addEventListener("click", function(e){

    console.info("Butona tikladin")

})

