"use strict";

let counter = function(){
    let count = 0;
    let increment = function(){
        return count += 1;
    }
    return increment
}

let firstCounter = counter()

for(let i = 0; i < 10; i++){
    console.log(firstCounter())     // 1 2 ... 10
}

let secondCounter = counter()

console.log(secondCounter())        // 1
console.log(firstCounter())         // 11

// ----- Example -----
window.onload = function(){
    let count = 0
    let incButton = document.getElementById("increment")
    incButton.onclick = function(){
        count += 1
        document.getElementById("value").innerHTML = count
    }
    let decButton = document.getElementById("dicrement")
    decButton.onclick = function(){
        count -= 1
        document.getElementById("value").innerHTML = count
    }
}