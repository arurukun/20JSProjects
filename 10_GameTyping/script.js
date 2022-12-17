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
const endGameContainer=document.getElementById("end-game-container")

const words=[
    "admit",
    "floor",
    "unit",
    "drag",
    "juice",
    "airplane",
    "tens"
]

let randomWord;
let scores=0;
let times=10;

// cursor put on at start
text.focus();

const timeInterval=setInterval(setTime,1000);

function getRandomWord(){
    randomWord=words[Math.floor(Math.random()* words.length)]
    word.innerText=randomWord
}

// console.log(getRandomWord())

text.addEventListener("input",e=>{
    const insertedWord=e.target.value;

    if(insertedWord == randomWord){
        e.target.value=""
        console.log(insertedWord)
        getRandomWord();
        scores++
        score.innerText=scores;
    }
})

function setTime(){
    times--;
    time.innerText=times + "s"

    if(times === 0){
        clearInterval(timeInterval);
        const gameOver=()=>{

        }
    }
}

getRandomWord()