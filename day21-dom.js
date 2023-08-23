
// Document Object Model (DOM) - Day 1

// // syntax
// document.getElementsByTagName('tagname')

const h1 = document.getElementsByTagName('h1')

console.log(h1)
console.log(h1.length)

// manipule etmek icin her bir h1 e ulasalim 

let len = h1.length
for(let i = 0; i< len; i++){
    console.log(
        h1[i]
        )
}

// getElementsById() targets a single HTML element. We pass the id without # as an argument.

//syntax
 // document.getElementById('id')

 const secondTitle = document.getElementById("second-title")
 console.info( secondTitle)

 const thirdTitle = document.getElementById("third-title")
 console.log(thirdTitle)

