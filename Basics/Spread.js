"use strict";

// ----- Rest Parameter -----
function sum(...nums){
    let S = 0;
    for(let num of nums){
        S += num
    }
    return S
}
console.log(sum(1,2,3,4))


// ----- Spread Operator -----
let arr1 = [1,8,6,9]
let arr2 = [5,9,6,7]
// ...arr1, ...arr2  =>  1,8,6,9,5,9,6,7
console.log(Math.min(...arr1, ...arr2))