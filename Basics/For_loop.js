"use strict";

let list = ["h", 2, "jjk", true, NaN, null, undefined]
for(let i=0; i< list.length; i++){
    console.log(list[i])
}

// other way
for (let l of list) console.log(l)