
"Json, JS Object yapisina cok benziyor, sadece ufak tefek farklari var. Misal, Json'da tüm key ler string olmali."
"Json obje olarak da baslayabilir {}, Array(dizi) [] olarak da baslayabilir. Eger birden fazla user varsa Array [] olarak baslar."

let u = {
users:[
 {
name : "hercai",
surname : "erdem",
age : 25,
skills :[
    "java",
    "javasript",
    "selenium"
]
},
{
    name : "memet",
surname : "demirel",
age : 23,
skills :[
    "react",
    "javasript",
    "go",
    "c++"
]

}
]
}
let uJson= JSON.stringify(u)
console.log(uJson)


// json ile js object yapisi birbirine cok benziyor, en onemli farklari ise js de key ler dtring degilken json da keyler string"" yaziliyor.
///json dan object e getirirken parse() unu kullaniyoruz
//object den json a dönüstürürken de stringify() yapiyoruz

let txt = JSON.stringify(u,['name','skills', 4])
console.log(txt)