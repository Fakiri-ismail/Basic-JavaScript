"use strict";

document.getElementById("code").innerHTML = "Manipulating the DOM";

function to_red(){
    document.getElementById("code").style.color = 'red';
}

// Get Element By TagName
console.log("----- Get Element By TagName")
let bTags = document.getElementsByTagName('b')
for (let tag of bTags){
    console.log("<b> Tag :",tag.innerText)
}

let pTag = document.getElementById('jstext')
let iTag = pTag.getElementsByTagName('i')
console.log("<i> Tag :", iTag[0].innerHTML)

// Nodes
console.log("----- Nodes")
let select = document.querySelector("p#jstext")
let child_nodes = select.childNodes
let first_child = select.firstChild.nodeValue
let last_child = select.lastChild.nodeValue
let specific_child = child_nodes[1].firstChild.childNodes[0].nodeValue
console.log(first_child,"| ", specific_child, "| ", last_child)

// Create Node
let unorderList = document.getElementById('unOrder')
let item1 = document.createElement('li')
item1.textContent = "JavaScript"

let item2 = document.createElement('li')
let text2 = document.createTextNode("Java")
item2.appendChild(text2)                                        

unorderList.append(item1)
unorderList.append(item2)                                       // Add item to list

let h4 = document.createElement('h4')
h4.textContent = "List of programming languages:"
document.body.insertBefore(h4, unorderList)                     // Add Before

let h5 = document.createElement('h5')
h5.textContent = "End of list."
document.body.insertBefore(h5, unorderList.nextSibling)         // Add After

// Delete Node
let txt = document.getElementById('text')
txt.remove()
