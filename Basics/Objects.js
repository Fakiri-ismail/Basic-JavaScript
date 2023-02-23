"use strict";

const USD = 0.9

// Object
let product = {
    "id": 1,
    "name": "laptop",
    "price": 900,
    "promotion": true,
    "promo": 15,
    // function
    priceUSD: function(){ return this.price * USD},
    // function
    promoPrice(){ return this.price - this.price * (this.promo / 100)}
}

console.log(product.priceUSD())
console.log(product.promoPrice())

// window / this Object
var age = 130
console.log(window.age)
console.log(this.age)

// this inside object
let car = {
    make: "Audi",
    model: "A40",
    price: 240000,
    printDetails(){ console.log(this)},
    engine: {
        cylinders: 4,
        horsepower: 666,
        printDetails(){ console.log(this)},
    }
}

car.engine.printDetails()

// linking function to object
function productDetails(){
    console.log(
        `        id          : ${this.id}
        name        : ${this.name}
        price       : ${this.price}
        promotion   : ${this.promotion}
        promotion % : ${this.promo}%`
    )
}
productDetails.call(product)

// Object Constructors
function Product(id, name, price, promotion, pourcent){
    this.id = id
    this.name = name
    this.price = price
    this.promotion = promotion
    this.pourcent = pourcent

    this.details = function(){
        console.log(
            `Product details :
            id          : ${this.id}
            name        : ${this.name}
            price       : ${this.price}
            promotion   : ${this.promotion}
            promotion % : ${this.pourcent}% `
        )
    }
}

let myProduct = new Product(3, "T-sirt", 30, false, 0)
myProduct.details()

// Coping Objects
let hisProduct = Object.assign({}, myProduct)
let herProduct = {...myProduct}

let yourProduct = JSON.parse(JSON.stringify(product))   // doesn't copy functions inside the object

hisProduct.id = 4;  hisProduct.price = 200
herProduct.id = 5;  herProduct.name = "Car"
yourProduct.id = 6;  yourProduct.name = "Office"

myProduct.details()
hisProduct.details()
herProduct.details()

productDetails.call(product)
productDetails.call(yourProduct)

// Object Methods
console.log(Object.keys(car))
console.log(Object.values(car))
console.log(Object.entries(car))

let myCar = Object.assign(car, {"speed": 800})  // Merge Object (Not a deep copie)
console.log(car)
console.log(myCar)

let herCar = Object.freeze(car)  // You can't modifie the frozeen object 'car' (read only) 
car.engine.cylinders = 7         // But you can modifie the nested object 'engine' (modification affect 'car' and 'herCar')
console.log(herCar)

let hisCar = Object.seal(car)  // it does the same thing as Object.freeze() in the 'strict' mode