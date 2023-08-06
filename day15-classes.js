
// Defining a class

// syntax
class ClasName{
//code goes here
}
/*
class Person{
}

const person = new Person
console.log(person)
*/

class Person {
constructor(firstName, lastName){

    this.firstName = firstName
    this.lastName= lastName

}

}
const person02 = new Person("Memet", "Demirel")
const person03 = new Person("Hercai", "Sevval")
const person04 = new Person("Melisa", "Ballica")
const person05 = new Person("Kayra", "Erdem")

   console.log(
    person02,
    person03,
    person04,
    person05
    )

    class User{
    constructor(firstName, lastName, age, country,city ){

        this.firstName =firstName
        this.lastName = lastName
        this.age= age
        this.country = country
        this.city = city
    }

    }

    const user01 = new User("Memet", "Demirel", 23, "Malta", "Osmaniye")
    const user02 = new User ("Hercai", "Sevval", 25, "Italy", "Antalya")

    console.log(user01,user02)

    class GetterExample{
   constructor(firstName, lastName, skills){

    this.firstName =firstName
    this.lastName = lastName
    this.skills= skills

   }

 get getSkills(){
  return this.skills
} 
    }

    const getterExample = new GetterExample("Memet", "Demirel", "FullStack Dev, Spor")
    console.log(getterExample.getSkills)

    // Inheritance 

class Theacher extends User{

    teach(){

        return "Matematik dersi ogretiliyor"
    }


}

class Student extends User {

    learn(){

        return "Ders dinleniyor"
    }


}

const teacher01 = new Theacher("Tugba", "Sayin", 26, "Turkiye", "Ankara")
const student01 = new Student("Su", "Erdem", 21, "Germany", "Karabuk")

console.log( 
   teacher01, teacher01.teach()
)

console.log(
    student01.learn()
)