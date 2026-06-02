let student = {
    fullName : "Harka Bahadur",
    roll: 89,
    marks: 4590,
    behaviour: "very worst",
}

// converting object (key:value pair) to array
// loop cannot be used directly in object so we have to convert it to array
// conversion ways:
let keyArray = Object.keys(student)
console.log("only key array: ", keyArray)
let valueArray = Object.values(student)
console.log("only value array: ", valueArray)
// value and key combination is called entries
let entriesArray = Object.entries(student)
console.log("entries array: ", entriesArray)

// TODO: Use map, forEach, find, filter, reduce, for-in, for-of for these keyArray, valueArray, entriesArray (use destructuring techinque on entries)
// aaja ko attandance abijal le garnu parnay xa