
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
 console.info(thirdTitle)

const allTitles = document.querySelectorAll('h1') 
console.log(allTitles.length) // 4
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i])
}

allTitles.forEach(title => console.log(title))
const allTitles02 = document.querySelectorAll('.title') // the same goes for selecting using class


const title = document.getElementById("title")

// title.style.color = 'purple'
// title.style.background= " pink"
// title.title  = "Hercai loves JS"

title.setAttribute("style", "color:purple; background:pink")
title.setAttribute("title", "Hercai loves JS")



const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {

    title.style.fontSize ='15px' // all titles will have 24px font size

    if(i % 2 ==0){
        title.style.color ='pink'
        title.style.background= 'purple'
        title.title ='Nice'
    }else{

        title.style.color ='purple'
        title.style.background= 'pink'
        title.title ='Beautiful girl'
    }

})
























