const word=document.getElementById("word")
const wrongLetter=document.getElementById("wrong-letters")
const finalMessage=document.getElementById("final-message")
const popupContainer=document.getElementById("popup-container")
const playBtn=document.getElementById("playAgain-btn")
const notificationContainer=document.getElementById("notification-container")
const strokePart=document.querySelectorAll(".stroke-white")
const levelBtn=document.getElementById("level-btn")

const words=["invasion","toddler","disoriented","deprivation"]

let difficulty = levelBtn.value

let selectedWord=words[Math.floor(Math.random() * words.length)]

let correctLetters=selectedWord.split(``).filter(() => Math.random()<difficulty ? true : false)
let wrongLetters=[]

// show hidden word
function displayWord(){
    word.innerHTML=`${selectedWord.split(``).map((moji)=> {
        return `<div class="letter border-b mx-1 w-5 text-xl flex justify-center">${correctLetters.includes(moji) ? moji : ""}</div>`
    }).join("")}`
    
    const innerword=word.innerText.replace(/\n/g,"")
    // console.log(popupContainer.classList.pop())

    if(innerword === selectedWord){
        finalMessage.innerText="Congratulations!! You WON!",
        popupContainer.className="text-white  fixed top-0 left-0 w-screen h-screen justify-center items-center flex";
    }
}

// keydown show letter
window.addEventListener("keydown",e=>{
    if(e.keyCode >=65 && e.keyCode<=90){
        const letter=e.key

        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter)

                displayWord()
            }else{
                notification()
            }
        }else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter)

                updateWrongLetter()
            }else{
                notification()
            }
        }
    }
})

// show wrong letter
function updateWrongLetter(){
    wrongLetter.innerHTML=`
    ${wrongLetters.length>0 ? "<p>Wrong</p>" : ""}
    ${wrongLetters}`
    // ${wrongLetters.map(wrongMoji=>`<span>${wrongMoji}</span>`)}`

    // show notification
    strokePart.forEach((part,index)=>{
        if(index < wrongLetters.length){
            part.style.display="block"
        }else{
            part.style.display="none"
        }
    })

    // game over notification
    if(strokePart.length == wrongLetters.length){
        // console.log(strokePart.length, " ", wrongLetters.length)
        // console.log(popupContainer.className)
        popupContainer.className="text-white fixed top-0 left-0 w-screen h-screen justify-center items-center flex";
        finalMessage.innerText="Oops!! Gomen nee! Game OVER!!";
    }
}

// show notification
function notification(){
    notificationContainer.classList.remove("hidden");

    setTimeout(()=>{
        notificationContainer.classList.add("hidden");
    },2000);
}

playBtn.addEventListener("click",()=>{
    wrongLetters=[];

    selectedWord=words[Math.floor(Math.random()*words.length)]
    difficulty=levelBtn.value

    correctLetters=selectedWord.split("").filter(()=> Math.random() < difficulty ? true : false)

    popupContainer.className='hidden'
    updateWrongLetter();
    displayWord()
})

displayWord()
