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

// ----- An other way to declare a function -----
let carre = val => val * val
let puissance = (val, p) => { return Math.pow(val, p) } 
let x = function(y){ return y }   // Anonymous function

console.log(carre(2), puissance(8, 2), x(12))

// ----- New Function -----
let addition = new Function("a", "b", "c", "return a + b + c")
let printHello = new Function("console.log('Hello !!')")
console.log(addition(1, 2, 3))
printHello()

// ----- Linking function to object -----
let product_1 = {
    "id" : "P1",
    "name": "laptop",
    "price": 200
}
let discount = function(promo, voucher){
    let price = this.price - ((this.price * promo) / 100) - voucher
    console.log("Price :", price)
}
// call()
discount.call(product_1, 10, 5)
// apply()
discount.apply(product_1, [10, 5])
// bind()
let product1_disc = discount.bind(product_1)
product1_disc(10, 5)
