let animals = ["Cow", "Dog", "Cat"]

// destructuring array
let [a1, a2] = animals
console.log("a1 : ", a1)
console.log("a2: ", a2)

let animal = {
    name: "cow",
    color: "brown",
    no_of_legs: 4
}

// destructuring object
let {color, no_of_legs, name} = animal
console.log("Name: ", name)
console.log("No of legs: ", no_of_legs)

// using destructuring in function parameters
let myFunc = ({name})=>{
    console.log("name inside function: ", name)
}
myFunc(animal)