"use strict";

class Vehicle{
    constructor(make, model, price){
        this.make = make
        this.model = model
        this.price = price
    }
}

let myVehicle = new Vehicle("Ferari", "S10", 250000)
let yourVehicle = JSON.parse(JSON.stringify(myVehicle))
let herVehicle = {...myVehicle}
let hisVehicle = Object.create(myVehicle)       // 'hisVehicle' is inherited from 'myVehicle' 

console.log("myVehicle is a Vehicle :", myVehicle instanceof Vehicle)       // true
console.log("yourVehicle is a Vehicle :", yourVehicle instanceof Vehicle)   // false
console.log("herVehicle is a Vehicle :", herVehicle instanceof Vehicle)     // false
console.log("hisVehicle is a Vehicle :", hisVehicle instanceof Vehicle)     // true

console.log("type of myVehicle is an", typeof myVehicle)       // object
console.log("type of yourVehicle is an", typeof yourVehicle)   // object
console.log("type of herVehicle is an", typeof herVehicle)     // object
console.log("type of hisVehicle is an", typeof hisVehicle)     // object


class Car extends Vehicle{
    constructor(make, model, price, speed){
        super(make, model, price)
        this.speed = speed
    }
}

let myCar = new Car("Ferari", "S10", 250000)
console.log("myCar is a Vehicle :", myCar instanceof Vehicle)       // true