const settingBtn=document.getElementById("setting-btn")
const setting=document.getElementById("setting")
const settingForm=document.getElementById("setting-form")
const difficulty=document.getElementById("difficulty")
const container=document.getElementById("container")
const word=document.getElementById("word")
const text=document.getElementById("text")
const score=document.getElementById("score")
const time=document.getElementById("time")
const scoreContainer=document.getElementById("score-container")
const timeContainer=document.getElementById("time-container")
const endGame=document.getElementById("end-game-container")

const words=[
    "admit",
    "floor",
    "unit",
    "drag",
    "juice",
    "airplane",
    "tens"
]

let randomword;
let scores=0;
let times=0;

function getRandomWord(){
    return words[Math.floor(Math.random()* words.length)]
}

// console.log(getRandomWord())