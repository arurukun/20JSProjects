const word=document.getElementById("word")
const wrongLetter=document.getElementById("wrong-letters")
const finalMessage=document.getElementById("final-message")
const popupContainer=document.getElementById("popup-container")
const playAgainBtn=document.getElementById("playAgain-btn")
const notificationContainer=document.getElementById("notification-container")

const strokePart=document.querySelectorAll(".stroke-white")

const words=["invasion","toddler","disoriented","deprivation"]

const difficulty = 0.1

let selectedWord=words[Math.floor(Math.random() * words.length)]

const correctLetters=selectedWord.split(``).filter(() => Math.random()<difficulty ? true : false)
const wrongLetters=[]

// show hidden word
function displayWord(){
    word.innerHTML=`${selectedWord.split(``).map((moji) => {
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

    strokePart.forEach((part,index)=>{
        if(index < wrongLetters.length){
            part.style.display="block"
        }else{
            part.style.display="none"
        }
    })
}

// show notification
function notification(){
    notificationContainer.classList.remove("hidden");

    setTimeout(()=>{
        notificationContainer.classList.add("hidden");
    },200);
}

displayWord()
