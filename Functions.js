"use strict";

function ready(){
    var output = confirm("Ready to move to the next page ?")
    // ----- if statement -----
    if (output)
        console.log('Yes')
    else
        console.log('No')
    // ---- another way -----
    console.log((output) ? "Yes" : "No")
};
window.onload = ready;

// ----- another way to declare a function -----
let carre = val => val * val
let puissance = (val, p) => {
    return Math.pow(val, p)
}

// ----- anonymous function -----
let x = function(y){return y}

console.log(carre(2), puissance(8, 2), x(12))