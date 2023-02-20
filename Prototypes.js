"use strict";

function StudentProto(name){
    this.name = name;
    StudentProto.prototype.age = 25;

    StudentProto.prototype.avgScore = (scoreArry) => {
        scoreArry.reduce((sum, score) => sum + score) / scoreArry.length;
    }
    StudentProto.prototype.intro = () => {
        console.log(`My name is ${this.name} and I have ${this.age} years old`)
    }
}

let ismail = new StudentProto('Ismail')
let asma = new StudentProto('Asma')

ismail.intro()              // print Asma as name in the console !!
console.log(ismail)
asma.intro()                
console.log(asma)

StudentProto.prototype.age = 13

ismail.intro()              // print Asma as name in the console !!
console.log(ismail)
asma.intro()
console.log(asma)
