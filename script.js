function calculate(){

let d = Number(document.getElementById("diameter").value)
let h = Number(document.getElementById("height").value)
let w = Number(document.getElementById("width").value)
let l = Number(document.getElementById("length").value)
let div = Number(document.getElementById("divisions").value)

let circumference = Math.PI * d

let arcDivision = circumference / div

let chordDivision =
2*(d/2)*Math.sin(Math.PI/div)

let slantHeight =
Math.sqrt(h*h + ((l-d)/2)**2)

let area = slantHeight * circumference

document.getElementById("arc").innerText =
arcDivision.toFixed(2)

document.getElementById("chord").innerText =
chordDivision.toFixed(2)

document.getElementById("area").innerText =
area.toFixed(2)

drawPattern(d,div)

}

function drawPattern(d,div){

let canvas = document.getElementById("patternCanvas")

let ctx = canvas.getContext("2d")

canvas.width = 600
canvas.height = 400

ctx.clearRect(0,0,600,400)

let r = d/2

for(let i=0;i<div;i++){

let angle =
(i/div)*2*Math.PI

let x =
300 + r*Math.cos(angle)

let y =
200 + r*Math.sin(angle)

ctx.beginPath()

ctx.arc(x,y,3,0,2*Math.PI)

ctx.fill()

}

}

