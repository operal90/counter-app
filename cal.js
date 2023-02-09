let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
sumEl = document.getElementById("sum-el")


function add(){
     let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

function subtract(){
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}


function divide(){
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}


function multiply(){
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}

let mySelf = ['Opeyemi']
let age = [34]
let hobby = ['I like pizza']

// for (let i = 10; i < 101; i += 10) {
//     console.log(i)
// }

let cards = [7, 3, 9]

for (let i = 0; i < cards.length; i++){
    console.log(cards[i])
}