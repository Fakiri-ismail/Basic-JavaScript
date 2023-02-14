"use strict";

class Product{

    constructor(id, name, price, promotion, pourcent){
        this.id = id
    this.name = name
    this.price = price
    this.promotion = promotion
    this.pourcent = pourcent
    }
    
    details = function(){
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