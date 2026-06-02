// template literals: embeding variable value inside the string
// syntax: `${}`
let message = "Welcome to first day js practice"
let name = "Pradip Shrestha"
let role = "Director"
let salary = 40000
// using template literals to combine all these variables value
let combineMsg = `${message}, My full name is ${name.toUpperCase()} and my role is ${role}. My salary is ${salary}`
console.log(combineMsg)
// without using template literals or traditional way
// let tradtionalMsg = message + ", My full name is " + name.toUpperCase() + " and my role is " + role + ". My Salary is " + salary 
// console.log(tradtionalMsg)

// Default Parameters
let divide = (a=1, b=1)=>{
    let divideRes = a/b
    console.log(`Divide result = ${divideRes}`)
}
divide()
divide(34)
divide(45,5)
