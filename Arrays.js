"use strict";

// ----- Working with Arrays -----

let number = [1,8,6,5,9,7]

let deepCopy = number.slice()       // deep copy
number.push(100)                    // Add element at the end of array
number.unshift(0)                   // Add element at the start of array

number.pop()                        // Delete the last element in the array
number.shift()                      // Delete the first element in the array
delete number[3]                    // Delete element in specific position

number.splice(3, 0, ...[50,80,90])  // Splicing Array (Add elements in specific position
let n = number.slice(3,8)           // Slicing Array (Copy specific part of array)

// Concatination
let strings = ["A", "B", "C", "D"]
let bools = [true, false, false]
let concatArray = number.concat(strings, bools)

// Sorting
concatArray.sort()
// numeric sorting
number.sort(function(a,b){return a - b})

// Reverse
concatArray.reverse()

console.log(number)
console.log(concatArray)

// Map Methode
let items =[
    {"Name": "meat", "Price": 25},
    {"Name": "fruits", "Price": 20},
    {"Name": "cake", "Price": 15},
    {"Name": "drinks", "Price": 38}
]

let priceList = items.map(function(item){return item.Price})
let nameList = items.map(item => item.Name)     // ES6 Syntax

console.log(priceList)
console.log(nameList)

// Reduce Methode
let total = priceList.reduce((sum, price) => sum + price, 0)
console.log(total)

// Filter Methode
let expensiveItems = items.filter(item => item.Price > 20)
console.log(expensiveItems)

// Set() (remove duplicate value)
let num = [1, 2, 5, 1, 7, 6, 2, 5 ,7]
let setOfnum = new Set(num)
let uniqueNum = [...setOfnum]
console.log(uniqueNum)
