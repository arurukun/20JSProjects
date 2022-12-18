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

let difficultLevel=localStorage.getItem("saving") ? localStorage.getItem("saving") : "medium";
difficulty.value=difficultLevel
// console.log(difficulty.value)


function getRandomWord(){
    randomWord=words[Math.floor(Math.random()* words.length)]
    word.innerText=randomWord
}

// console.log(getRandomWord())

text.addEventListener("input",e=>{
    const insertedWord=e.target.value;

    if(insertedWord == randomWord){
        e.target.value=""
        // console.log(insertedWord)
        getRandomWord();
        scores++
        score.innerText=scores;
        if(difficulty.value === "hard"){
            times+=1
            console.log("yuki")
        }else if(difficulty.value === "medium"){
            times+=2
        }else{
            times+=3
        }
    }
})

function setTime(){
    times--;
    time.innerText=times + "s"

    if(times === 0){
        clearInterval(timeInterval);
        endGameContainer.innerHTML=`
            <div class="flex flex-col  items-center">
                <h1 class="text-2xl font-bold mb-4">TIME RAN OUT</h1>
                <p>Your final score is ${scores}</p>
                <button onclick="location.reload()" class="p-3 bg-blue-800 mt-4">RELOAD</button>
            </div>
        `
        endGameContainer.style.display="flex";
    }
}


settingBtn.addEventListener("click",e=>{
    setting.classList.toggle("hidden")
})

difficulty.addEventListener("change",e=>{
    difficultLevel=e.target.value;
    localStorage.setItem("saving",difficultLevel);
    // console.log(difficultLevel)
})


getRandomWord()