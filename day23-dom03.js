
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

/*
click - when the element clicked
dblclick - when the element double clicked
mouseenter - when the mouse point enter to the element
mouseleave - when the mouse pointer leave the element
mousemove - when the mouse pointer move on the element
mouseover - when the mouse pointer move on the element
mouseout -when the mouse pointer out from the element
input -when value enter to input field
change -when value change on input field
blur -when the element is not focused
keydown - when a key is down
keyup - when a key is up
keypress - when we press any key
onload - when the browser has finished loading a page

*/

const input = document.getElementById("name")
input.addEventListener("input", e =>{
console.log("Bir seyler yaziliyor...", e.target.value)

})

const colorInput = document.getElementById("color-picker")
colorInput.addEventListener("input", e => {
    document.body.style.background = e.target.value
})

const saveRulesCheckBox = document.getElementById("save-rules")

const saveButton = document.getElementById("save-btn")
saveButton.addEventListener("click", e=>{
    console.log(
        input.value,
        colorInput.value,
        saveRulesCheckBox.checked
    )
})